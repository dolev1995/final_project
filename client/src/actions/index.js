import axios from 'axios';
import TR from '../translator';
//import {baseApi} from '../config'


const baseApi = process.env.BASE_URL;

export const userAdd = (newUser) => {
	return function (dispatch) {
		axios.post(baseApi + 'user/add', newUser)
		.then(function (response) {
				sessionStorage.userid = response.data._id;
				dispatch({type: "USER_RECEIVED", payload: response.data});
			}
		).catch(function (error) {
			try {
				error.response.data.message = TR(error.response.data.message)
			} catch (e) {
			}
			dispatch({type: "USER_ERR", payload: error.response.data});
		})
	}
};