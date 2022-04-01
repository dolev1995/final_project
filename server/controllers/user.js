'use strict';
const { getMaxListeners } = require('process');
const Item = require('../models/user')
const mongoose = require('mongoose'),
	crypto = require('crypto'),
	defaultAdd = require('./index').default_add,
	q = require('q'),
{KJUR} = require('jsrsasign');
const ObjectId = require('mongoose').Types.ObjectId;



// function addUser(User, data = {}) {
// 	const item = Item.create(User);
// 		emailFilter = data.email ? [{email: data.email}] : [],
// 		filter = {$or: [...(emailFilter), ...(phoneFilter), ...(tzFilter)]}
// 	return new Promise((resolve, reject) =>
// 		User.findOne(filter)
// 		.then(user => {
// 			if (user) reject({message: 'user already exists', code: 422});
// 			resolve({data, toDefault: true})
// 		}).catch(reject)
// 	)
// }


// exports.addUser = asyncHandler(async (req, res, next) => {
//     const item = await Item.create(req.body);
//     res.status(201).json({
//         success: true,
//         data: item
//     });
// }
// );

async function  asyncHandler (req, res, next)  {
	console.log('hooo');
   console.log(req.body);
   const body = req.body;
	const item = await Item.create({
		email : body.email,
		 name: {
			firstName:body.firstName, 
			lastName: body.lastName
		},
		password: body.password 
	});
 
}

exports.addUser = asyncHandler;





exports.add = asyncHandler;


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


