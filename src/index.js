import React, { Component } from 'react';
import { render } from 'react-dom';
import './index.css';
import { combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';
import MainContainer from './containers/Main.container';
import TimerReducer from './reducers/Timer.reducer';


class App extends Component {

  render() {
    let reducers = combineReducers({
      data: TimerReducer,
    });

    let store = createStore(reducers);
    return (
      <Provider store={store}>
        <MainContainer />
      </Provider>
    );
  }
}

render(<App />, document.getElementById('root'));
