import sendRequest from "./send-request";
const BASE_URL = '/api/movielist';


export async function getAll() {
  return sendRequest(BASE_URL);
};