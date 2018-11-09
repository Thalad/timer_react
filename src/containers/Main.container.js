import ListeTimer from '../components/ListeTimer';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as timerAction from '../action/Timer.action.js';

let propsMapping = (state) => ({
  Timers: state.data.timer
});

let dispatchMapping = dispatch => ({
  actions: bindActionCreators(timerAction, dispatch)
});

let MainContainer = connect(
  propsMapping,
  dispatchMapping
)(ListeTimer)

export default MainContainer;