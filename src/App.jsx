import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import MenuContainer from './containers/MenuContainer';
import HomeContainer from './containers/HomeContainer';
import AboutContainer from './containers/AboutContainer';
import './scss/app.scss';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="app">
          <MenuContainer />
          <Route exact path="/" component={HomeContainer} />
          <Route path="/about" component={AboutContainer} />
        </div>
      </Router>
    );
  }
}

export default App;
