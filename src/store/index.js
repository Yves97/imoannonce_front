import { applyMiddleware, compose, createStore, combineReducers } from 'redux'
import thunk from 'redux-thunk';

import {authReducer} from './reducers/auth'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const rootReducers = combineReducers({auth : authReducer})

const store = createStore(rootReducers, composeEnhancers(applyMiddleware(thunk)));
export {store}

