import { combineReducers } from 'redux';
import toDoReducer from '../../reducers';


const rootReducer = combineReducers({
  todoRootReducer: toDoReducer,
  
});

export default rootReducer;