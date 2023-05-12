import { combineReducers } from "redux";
import { bankingReducer } from "./bankingReducer";
import { authReducer } from "./auth";

export const rootReducer = combineReducers({
    auth: authReducer,
    banking: bankingReducer,
})