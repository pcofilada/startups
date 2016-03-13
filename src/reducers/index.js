import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import StartupsReducer from './reducer_startups';

const rootReducer = combineReducers({
  startups: StartupsReducer,
  form: formReducer
});

export default rootReducer;
