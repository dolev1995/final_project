'use strict';
const mongoose = require('mongoose'),
	crypto = require('crypto'),
	defaultAdd = require('./index').default_add,
	q = require('q'),
{KJUR} = require('jsrsasign');
const ObjectId = require('mongoose').Types.ObjectId;



function addUser(User, data = {}) {
		emailFilter = data.email ? [{email: data.email}] : [],
		filter = {$or: [...(emailFilter), ...(phoneFilter), ...(tzFilter)]}
	return new Promise((resolve, reject) =>
		User.findOne(filter)
		.then(user => {
			if (user) reject({message: 'user already exists', code: 422});
			resolve({data, toDefault: true})
		}).catch(reject)
	)
}



exports.app_register = function (userModel, userData) {
	const emailFilter = userData.email ? [{email: userData.email}] : [],
		phoneFilter = userData.phone ? [{phone: userData.phone}] : [],
		filter = {$or: [...(emailFilter), ...(phoneFilter)]};
	return new Promise((resolve, reject) => {
		if (!userData.email)
			return reject({message: {err: 'email is missing'}, code: 400});
		if (!userData.name)
			reject({message: {err: 'name is missing'}, code: 400});
		if (!userData.password) {
			return reject({message: {err: 'password is missing'}, code: 400});

		}
		userModel.findOne(filter)
		.then(user => {
			if (user) {
				if (userData.type === 'google')
					return resolve(user);
				if (user.email === userData.email)
					return reject({"message": "email already exist", "code": "422"});
				if (user.phone === userData.phone)
					return reject({"message": "phone already exist", "code": "422"});
				return reject({"message": "user already exist", code: 422});
			}

			const newUser = new userModel();
			const fullName = userData.name;
			const index = fullName.indexOf(" ") > 0 ? fullName.indexOf(" ") : fullName.length;
			const firstName = fullName.substr(0, index).trim();
			let lastName = fullName.substr(index + 1).trim();
			if (!firstName)
				return reject({"message": "first name is missing", "code": 422});
			if (!lastName)
				lastName = '.';
			if (userData.type) {
				newUser[`${userData.type}Token`] = userData.password
				newUser.registerType = userData.type
			}
			newUser.name.first = firstName;
			newUser.name.last = lastName;
			newUser.email = userData.email;
			newUser.phone = userData.phone;
			newUser.password = userData.password;
			newUser.tithalal = true;
			const StudyingSchedule = require('../models/studyingSchedule');
			StudyingSchedule.findOne({name: "תתהלל"}).then(studyingSchedule => {
				newUser.studyingScheduleID = studyingSchedule._id;
				newUser.save().then((user) => {
					user.password = undefined;
					resolve(user)
				})
				.catch(err => {
					console.log(err);
					return reject({message: err.message, code: 500})
				})
			})
			.catch(err => reject({message: 'no studying schedule tithalal', code: 500}))

		})
		.catch(err => {
			console.log(err);
			return reject({message: 'error', code: 500})
		})
	})
}



exports.add = addUser;


const filter = function (User, {filter = {}, search, skip = 0, limit = 50, keys = [], sort = {}}) {

	const dotenv = require('dotenv');
	dotenv.config();
	const {paths} = User.schema;
	const types = {};
	Object.keys(paths)
	.filter(property => paths[property].selected !== false)
	.map(property => {
		const p = property.split('.');
		types[p[0]] = (p[1] ? 'Object' : paths[property].instance);
	});
	keys = keys.filter(k => types[k]).join(' ');
	if (search) filter = helper.searchFilter(search, paths);
	if (Object.keys(filter).includes('studyingScheduleID')) {
		let _id = filter.studyingScheduleID.toString();
		filter = {...filter, studyingScheduleID: new ObjectId(_id)}
	}
	let Aggregate = User.aggregate([
		{
			$match: filter
		}
	]);
	let promises = [];
	Aggregate.project({
		name: '$name',
		email: '$email',
		perm: '$perm',
		registedDate: '$registedDate',
		testsNum: {$cond: {if: {$isArray: "$tests"}, then: {$size: "$tests"}, else: 0}},
		studyingScheduleID: "$studyingScheduleID",
		credits: "$credits",
		studyPlace: "$studyPlace",
		tests: '$tests'
	});
	Aggregate.lookup({
		from: 'studying_schedules',
		localField: 'studyingScheduleID',
		foreignField: '_id',
		as: 'studyingSchedule'
	})
	if (!isEmptyObject(sort)) {
		Aggregate.sort(sort);
	}
	Aggregate.skip(skip);
	Aggregate.limit(limit);
	promises.push(Aggregate);
	promises.push(User.count(filter));

	return q.all(promises)
	.then(async ([users, count]) => {
		for (const _user of users) {
			_user.average = getUserTestAvg(_user.tests)
			if ((_user.studyingScheduleID || 0).toString() === process.env.VEHAAREV_NA_STUDYING_SCHDULE_ID)
				_user.credits = await SumCreditsService.getUserCredit(_user.tests, _user._id);
			delete _user.tests
		}
		if (sort.average)
			users.sort((_user1, _user2) => {
				if (_user1.average < _user2.average)
					return -1 * sort.average
				if (_user1.average > _user2.average)
					return 1 * sort.average
				return 0;
			})
		return q({data: users, info: {count, types}});
	})
	.catch(err => q.reject(err));


};

exports.filter = filter;


