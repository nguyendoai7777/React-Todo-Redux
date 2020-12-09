import  {combineReducers} from 'redux';
import switchReducer from "./switchMode";

// Combine Reducer
const rootReducer = combineReducers({
  switchMode: switchReducer
});

export default rootReducer;
