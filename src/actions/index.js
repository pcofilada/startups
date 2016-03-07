import axios from 'axios';

export const FETCH_STARTUPS = 'FETCH_STARTUPS';

const ROOT_URL = 'http://localhost:3000';

export function fetchStartups() {
  const request = axios.get(`${ROOT_URL}/startups`);

  return {
    type: FETCH_STARTUPS,
    payload: request
  }
}
