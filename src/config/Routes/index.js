import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from '../../components/pages/Login';
import Dashboard from '../../components/pages/Dashboard';
import About from '../../components/pages/About';
import Register from '../../components/pages/Register';
import Adduser from '../../components/pages/Adduser';

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Dashboard />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        {/* <Route path="/adduser">
          <Adduser />
        </Route> */}
      </Switch>
    </Router>
  );
};

export default Routes;
