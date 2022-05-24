import axios from 'axios';
import TR from '../translator';
//import {baseApi} from '../config'


const baseApi = process.env.BASE_URL || 'http://localhost:3000/';

export const userAdd = (newUser) => {
	console.log('add user')
	console.log('baseApi',baseApi)
	const withCredentials = true;
	return axios.post(baseApi + 'user/add/test', newUser);
};
export const userLogin = (newUser) => {
	console.log('login user')
	console.log('baseApi',baseApi)
	const withCredentials = true;
	return axios.post(baseApi + 'user/login/test', newUser);
};

export const ShowTest = testId => {
	console.log('ShowTest')
	console.log('baseApi',baseApi)
	const withCredentials = true;
	const params= {
		testId
	}
	return axios.get(baseApi + 'ShowTest',params );
};
export const CheckGrade = data => {
	console.log('ShowTest')
	console.log('baseApi',baseApi)
	const withCredentials = true;
	return axios.post(baseApi + 'user/check/test',data );
};


export const ShowAllClasses = testId => {
	console.log('ShowTest')
	console.log('baseApi',baseApi)
	const withCredentials = true;
	return axios.get(baseApi + 'ShowAllClasses' );
};


export const ShowTestsByClassId = classId => {
	console.log('ShowTest')
	console.log('baseApi',baseApi)
	const withCredentials = true;
	const params = {
		classId
	}
	return axios.get(baseApi + 'ShowTestsByClassId',{ params} );
};


export const ShowTestById = testId => {
	console.log('ShowTest')
	console.log('baseApi',baseApi)
	const withCredentials = true;
	const params = {
		testId
	}
	return axios.get(baseApi + 'ShowTestById',{ params} );
};

export const ShowGrade = grades => {
	console.log('ShowGrade')
	console.log('baseApi',baseApi)
	const withCredentials = true;
	const params = {
		grades
	}
	return axios.get(baseApi + 'ShowGrade',{ params} );
};

export const GradeCalculation = AnswerId => {
	console.log('GradeCalculation')
	console.log('baseApi',baseApi)
	const withCredentials = true;
	const params = {
		AnswerId
	}
	return axios.get(baseApi + 'GradeCalculation',{ params} );
};
export const  QustetionTest = () => {
	console.log(' Qustetion')
	console.log('baseApi',baseApi)
	const withCredentials = true;
	return axios.post(baseApi + 'Qustetion', );
};
export const getUsers = () => {
	console.log('get users')
	console.log('baseApi',baseApi)
	const withCredentials = true;
	return axios.get(baseApi + 'Getuser',"");
};


// export const userAdd = (newUser) => {
// 	return function (dispatch) {
// 		console.log('add use')
// 		axios.post(baseApi + 'user/add/test', newUser)
// 		.then(function (response) {
// 			console.log('add user then')
// 				sessionStorage.userid = response.data._id;
// 				dispatch({type: "USER_RECEIVED", payload: response.data});
// 			}
// 		).catch(function (error) {
// 			try {
// 				error.response.data.message = TR(error.response.data.message)
// 			} catch (e) {
// 			}
// 			dispatch({type: "USER_ERR", payload: error.response.data});
// 		})
// 	}
// };