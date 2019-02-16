import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import MenuContainer from './containers/MenuContainer';
import HomeContainer from './containers/HomeContainer';
import AboutContainer from './containers/AboutContainer';
import NotFound from './components/NotFound';
import './scss/app.scss';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="app">
          <MenuContainer />
          <Switch>
            <Route exact path="/" component={HomeContainer} />
            <Route path="/about" component={AboutContainer} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
