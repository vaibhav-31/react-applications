import { ADD_PRODUCT, DELETE_PRODUCT } from "src/actions/actions";
import { Product } from "src/types";

export type ReduxStore = {
    products: Array<Product>;
    exams: Array<any>;
};

const initialState: ReduxStore = {
    products: [],
    exams: [],
};

type Action = {
    type: string;
    payload: string | number;
};

// reducers are pure functions

//no polluting the old state

function reducer(state = initialState, action: Action) {
    switch (action.type) {
        case ADD_PRODUCT: {
            //creating a copy of old state

            const newState = { ...state };
            newState.products = { ...newState.products };
            newState.products.push({
                id: Date.now(),
                title: action.payload as string,
                completed: false,
            });
            return newState;
        }
        case DELETE_PRODUCT: {
            const newState = { ...state };
            newState.products = { ...newState.products };
            newState.products = newState.products.filter (
                (product) => product.id !== action.payload
            );
          
            return newState;
        }

        default:
            return state; //return old state as we didn't match any case
    }
}

export default reducer;