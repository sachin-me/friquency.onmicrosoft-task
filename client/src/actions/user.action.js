// const uri = 'http://localhost:8000'

const actions = {
  createUser: (data, cb) => dispatch => {
    fetch(`/users/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(user => {
      if (user.msg) {
        cb(true)
      } else {
        cb(false)
      }
    })
  },

  loginUser: (data, cb) => dispatch => {
    fetch('/users/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(user => {
      if (user.msg) {
        let { userInfo } = user;
        localStorage.setItem('token', userInfo.token);
        localStorage.setItem('user', JSON.stringify(userInfo));
        dispatch({
          type: 'LOGGED_IN_SUCCESS',
          userInfo
        })
        cb(true)
      } else {
        cb(false)
      }
    })
  }
}

export default actions;
