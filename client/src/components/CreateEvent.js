import React, { Component } from 'react';

class CreateEvent extends Component {

  state = {
    eventname: '',
    eventhost: '',
    eventdate: '',
    eventplace: ''
  }

  handleChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value
    })
  }

  render() {
    return (
      <div>
        <form action="" method="post">
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

export default CreateEvent;
