import React from 'react';
import './App.css';

// Containers/Components
import LoginContainer from './containers/LoginContainer';
import HomeContainer from './containers/HomeContainer';

//Logic
import validateLogin from './functions/login';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      userName: '',
      customerId: '',
      loginFailMessage: '',
    }
    this.handleLogin = this.handleLogin.bind(this);
  }

  handleLogin = (userName, customerId) => {
    if (validateLogin(userName, customerId)) {
      this.setState({userName : userName, customerId: customerId});
      console.log(this.state);
    } else {
      this.setState({loginFailMessage: 'login failed'});
    }

  }

  render() {
    if (this.state.customerId) {
      return <HomeContainer/>;
    }
    else {
      return (
        <div className="App">
          <LoginContainer
            handleLogin={this.handleLogin}
            loginFailMessage={this.state.loginFailMessage} />
        </div>
      );
    }

  }
}

export default App;
