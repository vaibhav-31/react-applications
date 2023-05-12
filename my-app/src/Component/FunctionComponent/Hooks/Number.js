import {memo} from "react";

const Number = (props) => {
    console.log('running number');
    return (
        <>
          <div>Number: {props.number}</div>
          <button onClick={props.print}>Print Salary</button>
        </>
    )
}

export default memo(Number);