export const INITIAL_STATE = {
  transportationRequests: {
    1: {
      loadingPoint: "address_1",
      dropPoint: "address_2",
    },
    2: {
      loadingPoint: "address_2",
      dropPoint: "address_7",
    },
    3: {
      loadingPoint: "address_3",
      dropPoint: "address_4",
    },
    4: {
      loadingPoint: "address_4",
      dropPoint: "address_7",
    },
    5: {
      loadingPoint: "address_5",
      dropPoint: "address_1",
    },
  },
  selected: null,
};
export const SELECT_REQUEST = "SELECT_REQUEST";
export const CHANGE_POINT = "CHANGE_POINT";
