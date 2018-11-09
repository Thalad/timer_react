import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { ListTimers } from './component/listTimers/ListTimers.component';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ListTimers />
      </div>
    );
  }
}

export default App;