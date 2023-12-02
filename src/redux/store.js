import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';

const feeling = (state = 0, action) => {
  if (action.type === 'SET_FEELING') {
    return action.payload;
} if (action.type === 'CLEAR_FEEDBACK') {
    return 0;
}
  return state;
}

const understanding = (state = 0, action) => {
    if (action.type === 'SET_UNDERSTANDING') {
      return action.payload
  } if (action.type === 'CLEAR_FEEDBACK') {
    return 0;
}
    return state;
}

const support = (state = 0, action) => {
    if (action.type === 'SET_SUPPORT') {
      return action.payload
  } if (action.type === 'CLEAR_FEEDBACK') {
    return 0;
}
    return state;
}

const comment = (state = 0, action) => {
    if (action.type === 'SET_COMMENT') {
      return action.payload
  } if (action.type === 'CLEAR_FEEDBACK') {
    return 0;
}
    return state;
}

const feedback = (state = [], action) => {
    if (action.type === 'SET_FEEDBACK') {
      return action.payload
}
    return state;
}

const store = createStore(
    combineReducers({
      feeling,
      understanding,
      support,
      comment,
      feedback
    }),
    applyMiddleware(logger),
  );
  
  
export default store;
  