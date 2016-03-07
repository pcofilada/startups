import { combineReducers } from 'redux';

import StartupsReducer from './reducer_startups';

const rootReducer = combineReducers({
  startups: StartupsReducer
});

export default rootReducer;
