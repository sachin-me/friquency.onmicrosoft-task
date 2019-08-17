const initState = {
  user: JSON.parse(localStorage.getItem('user')) || null,
  isAuth: localStorage.token ? true : false
}

function userReducer(state = initState, action) {
  switch (action.type) {

    case 'LOGGED_IN_SUCCESS': {
      return {
        ...state,
        user: action.userInfo,
        isAuth: action.userInfo.token ? true : false
      };
    }

    default:
      return state;
  }
}

export default userReducer;
