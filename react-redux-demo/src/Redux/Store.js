import { createStore } from "redux";
import UserReducer from "./Reducer/CakeReducer";
import { composeWithDevTools } from 'redux-devtools-extension';

const Store = createStore(UserReducer)

export default Store