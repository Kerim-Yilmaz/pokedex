

import { applyMiddleware, createStore } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import reduxPromise from 'redux-promise-middleware';
import { composeWithDevTools } from "redux-devtools-extension";
import reducers from './rootReducer';


export const store = createStore(
    reducers,
    composeWithDevTools(applyMiddleware(reduxPromise,thunk,logger)),  
);