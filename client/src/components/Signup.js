import React, { Component } from 'react';
import { connect } from 'react-redux';
import actions from '../actions/user.action';

class Signup extends Component {

  state = {
    username: '',
    email: '',
    password: '',
    message: ''
  }

  handleChange = ({target: { name, value }}) => {
    this.setState({
      [name]: value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { username, email, password } = this.state;
    const data = { username, email, password }

    if (!username && !email && !password) {
      return this.setState({
        message: 'all fields are mendatory'
      })
    }
    this.props.dispatch(actions.createUser(data, (success, err) => {
      if (success) {
        this.props.history.push('/login');
      } else {
        this.setState({
          message: err
        })
      }
    }))
  }

  render() {
    return (
      <div className="create-event-wrapper">
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="username" placeholder="username" onChange={this.handleChange} />
          <input type="email" name="email" placeholder="email" onChange={this.handleChange} />
          <input type="password" name="password" placeholder="password" onChange={this.handleChange} />
          <div>
            <input type="submit" value="Signup" />
          </div>
        </form>
        <div className='message'>{this.state.message}</div>
      </div>
    )
  }
}

export default connect(null)(Signup);
