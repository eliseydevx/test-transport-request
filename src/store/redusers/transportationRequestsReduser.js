import { INITIAL_STATE, SELECT_REQUEST, CHANGE_POINT } from "../constant";

export const transportationRequestsReduser = (
  state = INITIAL_STATE,
  action
) => {
  switch (action.type) {
    case SELECT_REQUEST:
      return {
        ...state,
        selected: {
          ...state.selected,
          ...action.payload,
        },
      };
    case CHANGE_POINT:
      const id = action.payload.applicationId;
      return {
        ...state,
        transportationRequests: {
          ...state.transportationRequests,
          [id]: {
            ...state.transportationRequests[id],
            ...action.payload.values[id],
          },
        },
      };
    default:
      return state;
  }
};
