import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';

const setFeeling = (state = 0, action) => {
  if (action.type === 'SET_FEELING') {
    return action.payload
}
  return state;
}

const setUnderstanding = (state = 0, action) => {
    if (action.type === 'SET_UNDERSTANDING') {
      return action.payload
  }
    return state;
}


const store = createStore(
    combineReducers({
      setFeeling,
      setUnderstanding
    }),
    applyMiddleware(logger),
  );
  
  
export default store;
  