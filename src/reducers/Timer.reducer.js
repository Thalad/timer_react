import MOCK_TIMER from '../mock/Chronos.mock';
let initialState = {
  timer: MOCK_TIMER
};

let timerReducer = function (state = initialState, action) {
  switch (action.type) {
    case 'ADD':
      return {
        ...state,
        timer: [...state.timer, {desc: action.value}]
      };
    case 'REMOVE':
      let indexSearch = action.value
      return {
        ...state,
        timer: state.timer.filter((str, index) => (index !== indexSearch))
      };

    default:
      return state;
  }
}

export default timerReducer;