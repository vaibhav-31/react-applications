import React from "react";
import { Product } from '../types';

interface IProps {
    data: Product[];
    deleteProduct: (id: number) => void;
}

const ProductList = (props: IProps) => {
    return (
        <ul>
            {props.data.map((item) => {
                return <li key={item.id}>
                    <span className="title">{item.title}</span>
                    <span className="product-status">{item.completed ? 'Completed' : 'Pending'}</span>
                    <button onClick={() => props.deleteProduct(item.id)} className="delete-button">X</button>
                </li>;
            })}
        </ul>
    );
};

export default ProductList;