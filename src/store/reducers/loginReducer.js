import {UPDATE_INPUT} from '../constant';
const initialState={
    userName:'',
    password:''
}
const loginReducer = (state = initialState, action)=>{
    switch (action.type) {
        case UPDATE_INPUT:
          return {
             ...state,
               [action.id]: action.value 
              };
        default:
          return state;
      };
    
}

export default loginReducer;