const url = '/events'

const eventActions = {
	createEvent: (data, cb) => dispatch => {
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
			if (data.msg) {
				cb(true);
			} else {
				cb(false);	
			}	
		})
	},

	getEvents: () => dispatch => {
		fetch(`${url}/list`, {
			headers: {
				'Content-Type': 'application/json',
				authorization: localStorage.token
			}
		})
		.then(res => res.json())
		.then(events => {
			if (events.msg) {
				dispatch({
					type: 'GET_EVENTS_SUCCESS',
					events: events.events
				})
			}
		})
	}
}

export default eventActions;