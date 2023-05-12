import React, { useContext } from "react";
import {addressContext}  from "./TopLevel";
import {roleContext} from "./TopLevel"

const CompTwo = () => {
    const adress = useContext(addressContext)
    const role = useContext(roleContext)
    return (
        <>
        <div>Address- {adress}</div>
        <div>Role- {role}</div>
        </>
    )
}

export default CompTwo;