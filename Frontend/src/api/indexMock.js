import {
  UserActivity,
  UserAverageSessions,
  UserInfo,
  UserPerformance,
} from "./Model";
import mockData from "../data/data";

export const getMockUserInfo = (id) => {
  const data = mockData.USER_MAIN_DATA.find((user) => user.id === parseInt(id));
  if (data) return new UserInfo(data);
};

export const getMockUserActivity = (id) => {
  const data = mockData.USER_ACTIVITY.find(
    (user) => user.userId === parseInt(id)
  );
  if (data) return new UserActivity(data);
};

export const getMockUserAverageSessions = (id) => {
  const data = mockData.USER_AVERAGE_SESSIONS.find(
    (user) => user.userId === parseInt(id)
  );
  if (data) return new UserAverageSessions(data);
};

export const getMockUserPerformance = (id) => {
  const data = mockData.USER_PERFORMANCE.find(
    (user) => user.userId === parseInt(id)
  );
  if (data) return new UserPerformance(data);
};
