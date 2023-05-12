import React, { useEffect, useRef } from "react";

function UseRefExample() {
    const inputRef = useRef(null)
    const divRef = useRef(null)

    useEffect(() => {
        inputRef.current.focus()
        divRef.current.innerHTML = "Vishap"
    })
    return (
        <>
            <label>Search</label>
            <input type="text" ref={inputRef}></input>
            <div ref={divRef}>Vaibhav</div>
        </>
    )
}

export default UseRefExample;