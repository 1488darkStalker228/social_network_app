import { combineReducers, createStore } from 'redux'
import { auth } from './reducers/auth'

const rootReducer = combineReducers({

});

export const store = createStore(rootReducer);
