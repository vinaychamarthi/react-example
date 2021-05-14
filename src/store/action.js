import {UPDATE_INPUT} from './constant';

const onInputChange = (id,value) => ({
    type: UPDATE_INPUT,
    id,
    value
  });

  export default onInputChange;

