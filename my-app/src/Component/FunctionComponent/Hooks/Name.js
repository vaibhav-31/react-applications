import {memo} from "react";

const Name = (props) => {
    console.log('running name');
    return (
        <>
          <div>Name: {props.name}</div>
        </>
    )
}

export default memo(Name);