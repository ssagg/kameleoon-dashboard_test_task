import { BASE_API_URL } from "../constants/constants";

export const sites = async (): Promise<Response> => {
  return await fetch(`${BASE_API_URL}/sites`).then((resp) => {
    return resp.json();
  });
};

export const tests = async (): Promise<Response> => {
  return await fetch(`${BASE_API_URL}/tests`).then((resp) => {
    return resp.json();
  });
};
