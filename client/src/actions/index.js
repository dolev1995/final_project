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