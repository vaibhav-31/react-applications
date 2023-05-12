import React from "react";
import { useState, useRef, useEffect } from "react";

const StopWatch = () => {
    const [time, setTime] = useState(100);
    let interval = useRef(null);

    useEffect(() => {
        interval.current = setInterval(() => {
            setTime((prev) => prev-1)
        }, 1000)

    // console.log(interval);
    return () => {
        clearInterval(interval.current)
    }
    },[])

    const ClearTimer = (a) => {
        console.log('timer is running');
        console.log(a);
        clearInterval(a);
    } 

    return(
          <>
          <div>Timer : {time}</div>
          <button onClick = {() => ClearTimer(interval.current)}>Stop</button>
          </>
    );
}

export default StopWatch;