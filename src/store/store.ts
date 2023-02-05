import {createStore, combineReducers} from 'redux';
import userAuthReducer from './reducers/userAuthReducer';

const rootReducer = combineReducers({
  userAuth: userAuthReducer,
});
export const store = createStore(rootReducer);