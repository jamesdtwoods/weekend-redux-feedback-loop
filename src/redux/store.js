import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';

const feeling = (state = 0, action) => {
  if (action.type === 'SET_FEELING') {
    return action.payload
}
  return state;
}

const understanding = (state = 0, action) => {
    if (action.type === 'SET_UNDERSTANDING') {
      return action.payload
  }
    return state;
}

const support = (state = 0, action) => {
    if (action.type === 'SET_SUPPORT') {
      return action.payload
  }
    return state;
}

const comment = (state = 0, action) => {
    if (action.type === 'SET_COMMENT') {
      return action.payload
  }
    return state;
}


const store = createStore(
    combineReducers({
      feeling,
      understanding,
      support,
      comment
    }),
    applyMiddleware(logger),
  );
  
  
export default store;
  