import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import MenuContainer from './containers/MenuContainer';
import Home from './components/pages/Home';
import PortfolioContainer from './containers/PortfolioContainer';
import Contacts from './components/pages/Contacts';
import NotFound from './components/pages/NotFound';
import Copyright from './components/Copyright';
import './scss/app.scss';


class App extends Component {
  render() {
    return (
        <Router>
          <div className="app">
            <div className="first-screen-bg"></div>
            <MenuContainer />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/portfolio" component={PortfolioContainer} />
              <Route path="/contacts" component={Contacts} />
              <Route component={NotFound} />
            </Switch>
          <Copyright />
          </div>
        </Router>
    );
  }
}

export default App;
