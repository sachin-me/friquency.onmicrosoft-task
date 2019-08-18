const initState = {
  events: []
}

function eventReducer(state = initState, action) {
  switch (action.type) {
    case 'GET_EVENTS_SUCCESS': {
      return {
        ...state,
        events: action.events
      }
    }
      
    default:
      return state;
  }
}

export default eventReducer;