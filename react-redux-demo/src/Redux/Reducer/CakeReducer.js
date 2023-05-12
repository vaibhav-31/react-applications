import { BUY_CAKE, BUY_ICECREAM } from "../Constants/CakeType";

const initialState = {
    numOfCakes: 10,
    numOfIceCreams: 20
}

const CakeReducer = (state = initialState, action) => {
    switch (action.type) {
        case BUY_CAKE: return {
           ...state,
           numOfCakes : state.numOfCakes - 1
        }
        case BUY_ICECREAM: return {
            ...state,
            numOfIceCreams : state.numOfIceCreams - 1
        }
        default:
            return state;
    }
}

export default CakeReducer