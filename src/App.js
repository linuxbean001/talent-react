import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './style.scss';
import './App.scss';
import './responsive.scss';
import Talents from './components/talents/talents';
import Login from './components/login/login';
import Register from './components/Register/register';
import ProfileLayout from './components/profile-layout/profile-layout';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Switch>
              <Route exact path="/" component={Login} />
              <Route exact path="/login" component={Login} />
              <Route path="/register" component={Register} />
              <Route path="/talents" component={Talents} />
              <Route path="/profile" component={ProfileLayout} />
            </Switch>

          </div>
        </Router>
      </div>
    );
  }
}

export default App;
