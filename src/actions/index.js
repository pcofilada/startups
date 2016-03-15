import axios from 'axios';

export const FETCH_STARTUPS = 'FETCH_STARTUPS';
export const CREATE_STARTUP = 'CREATE_STARTUP'

export const ROOT_URL = 'https://startups-api.herokuapp.com';

export function fetchStartups() {
  const request = axios.get(`${ROOT_URL}/startups`);

  return {
    type: FETCH_STARTUPS,
    payload: request
  }
}

export function createStartup(props) {
  const request = axios.post(`${ROOT_URL}/startups`, props);

  return {
    type: CREATE_STARTUP,
    payload: request
  }
}
