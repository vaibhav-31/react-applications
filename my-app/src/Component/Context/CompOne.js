import React from "react";
import CompTwo from "./CompTwo"

const CompOne = (props) => {
    return (
        <>
         <div>Component One - {props.name}</div>
         <CompTwo />
        </>
    )
}

export default CompOne;