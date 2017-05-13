import fetch from 'isomorphic-fetch';

export default class Fetch {

	constructor(props) {
		super(props);
	}

	fetch({
		url, 
		data = {}, 
		method = 'get',
		successCallback = (data) => {},
		errorCallback = (data) => {},
	}) {

		// return fetch()
		// 			.then((data) => {

		// 			})
		// 			.catch((err) => {
		// 				throw err;
		// 			})
	}
}