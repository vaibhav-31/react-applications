import { ADD_PRODUCT, DELETE_PRODUCT } from "./actions";

//Create a Product
export const addProduct = (content: string) => {
    return {
        type: ADD_PRODUCT,
        payload: content,
    };
};

//Delete a Product
export const deleteProduct = (id: number) => {
    return {
        type: DELETE_PRODUCT,
        payload: id,
    };
};