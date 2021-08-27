import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from './reducers';

let middlewares = [];

let middleware = applyMiddleware(...middlewares);

const store = createStore(
    reducer,
    composeWithDevTools( middleware )
  );

  export default store;
  