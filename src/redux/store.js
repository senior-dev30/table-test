import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import reducers from './reducers';

const rootReducer = combineReducers({ ...reducers });

const store = createStore(rootReducer, composeWithDevTools());

export default store;

export { store };
