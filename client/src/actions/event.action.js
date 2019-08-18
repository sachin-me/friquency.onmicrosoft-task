const url = '/events'

const eventActions = {
	createEvent: (data, cb) => dispatch => {
		console.log(localStorage.token, 'token in event action')
		fetch(`${url}/create`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				authorization: localStorage.token
			},
			body: JSON.stringify(data)
		})
		.then(res => res.json())
		.then(data => {
			console.log(data, 'data in event action');
			cb(true);
		})
	}
}

export default eventActions;