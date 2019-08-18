import React, { Component } from 'react';
import { connect } from 'react-redux';
import actions from '../actions/user.action';

class Login extends Component {

  state = {
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
    const { email, password } = this.state;
    const data = { email, password }

    if (!email && !password) {
      return this.setState({
        message: 'all fields are mendatory'
      })
    }
    this.props.dispatch(actions.loginUser(data, (success, err) => {
      if (success) {
        this.props.history.push('/');
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
          <input type="email" name="email" placeholder="email" onChange={this.handleChange} />
          <input type="password" name="password" placeholder="password" onChange={this.handleChange} />
          <div>
            <input type="submit" value="Login" />
          </div>
        </form>
        <div className='message'>{this.state.message}</div>
      </div>
    )
  }
}

export default connect(null)(Login);
