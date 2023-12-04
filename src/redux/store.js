import {lagacy_createStore as createStore, applyMiddleware} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './reducer/index';


let store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

export default store;