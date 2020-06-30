import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import Splash from './components/Splash';
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/Dashboard';
import Details from './components/Details';
import Bag from './components/Bag';
import CreditCard from './components/CreditCard';
import Address from './components/Address';
import Confirm from './components/Confirm';
import ThankYou from './components/ThankYou';

export default function Routes() {
  return (
    <>
    <Router>
      <Switch>
        <Route path="/" component={Splash} exact />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/details" component={Details} />
        <Route path="/bag" component={Bag} />
        <Route path="/credit-card" component={CreditCard} />
        <Route path="/address" component={Address} />
        <Route path="/confirm" component={Confirm} />
        <Route path="/thank-you" component={ThankYou} />
      </Switch>
    </Router>
    </>
  )
};
