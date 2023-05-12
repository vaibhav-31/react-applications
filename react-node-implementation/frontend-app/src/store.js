import { applyMiddleware, createStore } from "redux";
import reducer from "./reducer";
import logger from 'redux-logger';


//redux architecture

//actions(useDIspatch) => middleware => reducer (switch) => store => useSelector

// reducer is a function that takes the old state & returns new state

const store = createStore(reducer, applyMiddleware(logger));

export default store;