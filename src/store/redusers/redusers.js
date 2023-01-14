
import { combineReducers } from "redux";
import { transportationRequestsReduser } from "./transportationRequestsReduser";

const allReducers = combineReducers({
    transportationRequests: transportationRequestsReduser,
});

export default allReducers;
