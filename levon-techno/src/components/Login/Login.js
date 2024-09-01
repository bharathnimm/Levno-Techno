import React, { Component } from 'react';
//import { withRouter } from 'react-router-dom'; // Ensure this path is correct
import './Login.css';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      role: 'student'
    };
  }

  handleInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { username, password, role } = this.state;

    // Hardcoded credentials
    if (username === 'admin' && password === 'admin') {
      if (role === 'student') {
        this.props.navigate('/students');
      } else if (role === 'teacher') {
        this.props.navigate('/teachers');
      }
    } else {
      alert('Invalid username or password');
    }
  };

  render() {
    return (
      <div className="login-container">
        <form onSubmit={this.handleSubmit} className="login-form">
          <h2>Login</h2>
          <label htmlFor="role">Select Role:</label>
          <select name="role" value={this.state.role} onChange={this.handleInputChange}>
            <option value="student">Student</option>
            <option value="teacher">Teacher</option>
          </select>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            value={this.state.username}
            onChange={this.handleInputChange}
            required
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            value={this.state.password}
            onChange={this.handleInputChange}
            required
          />
          <button type="submit">Login</button>
        </form>
      </div>
    );
  }
}

export default (Login);
