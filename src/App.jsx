import React, { Component } from 'react';
import MenuContainer from './containers/MenuContainer';
import ContentContainer from './containers/ContentContainer';
import './scss/app.scss';

class App extends Component {
  render() {
    return (

      <div className="app">
        <MenuContainer />
        <ContentContainer />
      </div>
    );
  }
}

export default App;
