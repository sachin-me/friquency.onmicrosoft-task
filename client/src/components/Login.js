import React, { Component } from 'react';
import { connect } from 'react-redux';
import actions from '../actions/user.action';

class Login extends Component {

  state = {
    email: '',
    password: ''
  }

  handleChange = ({target: { name, value }}) => {
    this.setState({
      [name]: value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.dispatch(actions.loginUser(this.state, success => {
      if (success) {
        this.props.history.push('/');
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
      </div>
    )
  }
}

export default connect(null)(Login);
