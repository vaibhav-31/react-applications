import React from "react";
import HighOrderComponent from "./HighOrderComponent";

function Hover(props) {
    const {number, increase, decrease, makeZero} = props

    return (
        <>
        <div>Conter: {number}</div>
        <button onMouseOver={() => increase(5)}>+</button>
        <button onMouseOver={decrease}>-</button>
        <button onMouseOver={() => makeZero(10)}>Reset</button>
        </>
    )
}

export default HighOrderComponent(Hover);