import React from 'react';

class LoginContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      username: '',
      customerId: '',
      error: '',
    };
    this.handleIdChange = this.handleIdChange.bind(this);
    this.handleUserChange = this.handleUserChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(evt) {
    evt.preventDefault();

    if (!this.state.username) {
      return this.setState({ error: 'Username is required' });
    }

    if (!this.state.customerId) {
      return this.setState({ error: 'Customer ID is required' });
    }
    this.props.handleLogin(this.state.username, this.state.customerId);
  }

  handleUserChange(evt) {
    this.setState({
      username: evt.target.value,
    });
  };

  handleIdChange(evt) {
    this.setState({
      customerId: evt.target.value,
    });
  }

  render() {
    return (
       <div className="Login">
        <form onSubmit={this.handleSubmit}>
          <label>User Name</label>
          <input type="text" data-test="username" value={this.state.username} onChange={this.handleUserChange} />

          <label>Customer ID</label>
          <input type="text" data-test="customerId" value={this.state.customerId} onChange={this.handleIdChange} />

          <input type="submit" value="Log In" data-test="submit" />
        </form>
        {
          this.state.error &&
          <h3 class="red-text">
            {this.state.error}
          </h3>
        }
      </div>
    );
  }
}

export default LoginContainer;