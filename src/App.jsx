import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import MenuContainer from './containers/MenuContainer';
import HomeContainer from './containers/HomeContainer';
import PortfolioContainer from './containers/PortfolioContainer';
import ContactsContainer from './containers/ContactsContainer';
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
              <Route exact path="/" component={HomeContainer} />
              <Route path="/portfolio" component={PortfolioContainer} />
              <Route path="/contacts" component={ContactsContainer} />
              <Route component={NotFound} />
            </Switch>
          <Copyright />
          </div>
        </Router>
    );
  }
}

export default App;
