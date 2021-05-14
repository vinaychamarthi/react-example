import loginReducer from './loginReducer';
import {combineReducers} from 'redux';

const index = combineReducers({    
    loginReducer: loginReducer
});

export default index;