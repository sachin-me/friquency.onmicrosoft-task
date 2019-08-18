import React,  { Component } from "react";
import { connect } from "react-redux";
import eventActions from "../actions/event.action";
import Event from "./Event";

class Events extends Component {

  componentDidMount = () => {
    this.props.dispatch(eventActions.getEvents())
  }

  render() {
    const { events } = this.props;
    console.log(events, 'events');
    return (
      <div>
        {
          events ? events.map(event => <Event key={event._id} event={event} />) : 'Loading...'
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    events: state.eventReducer.events
  }
}

export default connect(mapStateToProps)(Events);