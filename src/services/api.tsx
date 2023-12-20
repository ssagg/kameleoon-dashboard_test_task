import { BASE_API_URL } from "../constants/constants";

export const sites = async (): Promise<Response> => {
  return await fetch(`${BASE_API_URL}/sites`).then((resp) => {
    return resp.json();
  });
};

export const tests = async (): Promise<Response> => {
  return await fetch(`${BASE_API_URL}/tests`).then((resp) => {
    if (!resp.ok) {
      const error = resp.status;
      return Promise.reject(error);
    }
    return resp.json();
  });
};
