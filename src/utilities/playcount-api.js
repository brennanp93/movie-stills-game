import sendRequest from "./send-request";
const BASE_URL = '/api/playcount';

export async function getAll() {
  return sendRequest(BASE_URL);
};

export async function updateCount(countData, id) {
  return sendRequest(`${BASE_URL}/${id}`, 'PUT', countData)
}
