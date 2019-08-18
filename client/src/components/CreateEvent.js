import React, { Component } from 'react';
import { connect } from 'react-redux'
import eventActions from '../actions/event.action';

class CreateEvent extends Component {

  state = {
    eventname: '',
    eventhost: '',
    eventdate: new Date(),
    eventplace: ''
  }

  handleChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();

    const { eventname, eventhost, eventdate, eventplace } = this.state;
    const data =  { eventname, eventhost, eventdate, eventplace }

    this.props.dispatch(eventActions.createEvent(data, success => {
      if (success) {
        this.props.history.push('/events');
      }
    }))
  }

  render() {
    return (
      <div>
        <form action="" method="post" onSubmit={this.handleSubmit}>
          <input type="text" name="eventname" placeholder="event name" onChange={this.handleChange} />
          <input type="text" name="eventhost" placeholder="event host name" onChange={this.handleChange} />
          <input type="date" name="eventdate" id="" onChange={this.handleChange} />
          <input type="text" name="eventplace" placeholder="event place name" onChange={this.handleChange} />
          <input type="submit" value="Create Event" />
        </form>
      </div>
    );
  }
}

export default connect(null)(CreateEvent);
