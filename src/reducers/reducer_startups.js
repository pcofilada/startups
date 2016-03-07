import { FETCH_STARTUPS } from '../actions/index';

export default function(state = [], action) {
  switch(action.type) {
  case FETCH_STARTUPS:
    return state.concat(action.payload.data);
  default:
    return state;
  }
}
