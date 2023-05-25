import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import axios from 'axios';
import thunk from 'redux-thunk';

const inc = 'increment';
const dec = 'decrement';
const incByAmount = 'incrementByAmount';
const init = 'init';


//store
const store = createStore(reducer, applyMiddleware(logger.default, thunk.default));



//reducer
function reducer(state = { amount: 1 }, action) {

    switch (action.type) {
        case init:
            return { amount: action.payload }
        case inc:
            return { amount: state.amount + 1 }
        case dec:
            return { amount: state.amount - 1 }
        case incByAmount:
            return { amount: state.amount + action.payload }

        default:
            return state;
    }
}

function getUser(id) {
    return async (dispatch,getState) => {
        const { data } = await axios.get(`http://localhost:3000/accounts/${id}`)
        dispatch(initUser(data.amount))
    }
}

function initUser(value) {
    return { type: init, payload: value }
}

function increment() {
    return { type: inc }
}

function decrement() {
    return { type: dec }
}

function incrementByAmount(value) {
    return { type: incByAmount, payload: value }
}


setTimeout(() => {
    store.dispatch(getUser(1));
}, 5000);


