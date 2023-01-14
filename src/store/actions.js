import { CHANGE_POINT, SELECT_REQUEST } from "./constant";

export const selectRequestAction = (payload) => ({
  type: SELECT_REQUEST,
  payload,
});

export const changeRequestAction = (payload) => ({
  type: CHANGE_POINT,
  payload,
});
