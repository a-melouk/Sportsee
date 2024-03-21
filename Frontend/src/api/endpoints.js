const BASE_URL = "http://localhost:3000";

export const ENDPOINTS = {
  user: `${BASE_URL}/user/:userId`,
  userActivity: `${BASE_URL}/user/:userId/activity`,
  userAverageSessions: `${BASE_URL}/user/:userId/average-sessions`,
  userPerformance: `${BASE_URL}/user/:userId/performance`,
};
