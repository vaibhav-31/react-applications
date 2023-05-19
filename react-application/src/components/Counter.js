import  { useState, useMemo, useCallback } from "react";




function Counter() {
    const [number,setNumber] = useState(10);

    function handleClick() {
        setNumber(number+1);
        console.log(number);
    }

    const finFx = useCallback(function fib(n) {
        if(n===1 || n===2){
            return 1
        }
        return fib(n-1)+fib(n-2)
    },[])

    const fibmemotized = useMemo(() => finFx(number), [number,finFx]) 

    return (
        <>
        <h1>{number} | {fibmemotized}</h1>
        <button onClick={handleClick}>Add</button>
        </>
    )
}

export default Counter;