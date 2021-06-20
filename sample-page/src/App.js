import React, { useState } from 'react'
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from './components/login';
import Welcome from './components/welcome';

export default function App(props) {
  const [cUser, setCUser] = useState({
    email: 'test email',
    password: 'test password',
    loggedIn: false
  })

  const logFunc = (Info) => {
    const newUser = { ...cUser };
    newUser.email = Info.email;
    newUser.password = Info.password;
    newUser.loggedIn = true;
    setCUser(newUser);
  }

  //render
  const loginComponent = () => (<Login user={cUser} logFunc={logFunc} {...props} />)
  const welcomeComponent = () => (<Welcome user={cUser} />)

  return (
    <Router>
      <div className="App">
        {/* <Login /> */}

        <Switch>
          <Route exact path="/" render={loginComponent} />
          <Route exact path="/welcome" render={welcomeComponent} />
        </Switch>

      </div>
    </Router>

  );
}