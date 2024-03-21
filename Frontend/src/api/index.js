import {
  UserActivity,
  UserAverageSessions,
  UserInfo,
  UserPerformance,
} from "./Model";
import { ENDPOINTS } from "./endpoints";
import { parseJson } from "./helpers";

export const getUserInfo = async (userId) => {
  const url = ENDPOINTS.user.replace(":userId", userId);
  const response = await fetch(url);
  const result = await parseJson(response);
  if (result.status === "success") return new UserInfo(result.data);
  else if (result.status === "error" && result.error === "USER_NOT_FOUND")
    return Promise.resolve("USER_NOT_FOUND");
  else return Promise.reject("API_REQUEST_FAILED");
};

export const getUserActivity = async (userId) => {
  const url = ENDPOINTS.userActivity.replace(":userId", userId);
  const response = await fetch(url);
  const result = await parseJson(response);
  if (result.status === "success") return new UserActivity(result.data);
  else if (result.status === "error" && result.error === "USER_NOT_FOUND")
    Promise.reject("USER_NOT_FOUND");
  else Promise.reject("API_REQUEST_FAILED");
};

export const getUserAverageSessions = async (userId) => {
  const url = ENDPOINTS.userAverageSessions.replace(":userId", userId);
  const response = await fetch(url);
  // handleErrors(response);
  const result = await parseJson(response);
  if (result.status === "success") return new UserAverageSessions(result.data);
  else if (result.status === "error" && result.error === "USER_NOT_FOUND")
    Promise.reject("USER_NOT_FOUND");
  else Promise.reject("API_REQUEST_FAILED");
};

export const getUserPerformance = async (userId) => {
  const url = ENDPOINTS.userPerformance.replace(":userId", userId);
  const response = await fetch(url);
  // handleErrors(response);
  const result = await parseJson(response);
  if (result.status === "success") return new UserPerformance(result.data);
  else if (result.status === "error" && result.error === "USER_NOT_FOUND")
    Promise.reject("USER_NOT_FOUND");
  else Promise.reject("API_REQUEST_FAILED");
};
