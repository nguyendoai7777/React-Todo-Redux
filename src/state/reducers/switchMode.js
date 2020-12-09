import  {Actions} from '../actions/index';

const initialState = {
  mode:false
}

const switchReducer = (state=initialState,action)=>{
  switch(action.type){
    case Actions.SWITCH :
      return {...state,mode: !state.mode}
    default :
      return  state;
  }
}
export  default  switchReducer;
