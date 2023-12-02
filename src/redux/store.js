import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';

const pizzaMenu = (state = [], action) => {
  if (action.type === 'SET_PIZZA') {
    return action.payload
}
  return state;
}


const store = createStore(
    combineReducers({
      pizzaMenu
    }),
    applyMiddleware(logger),
  );
  
  
export default store;
  