import react, { useState } from "react";

function HighOrderComponent(Comp) {
    const NewComp = () => {
        const [counter, setCounter] = useState(100)

        const increment = (noToIncrease) => {
           setCounter(counter+noToIncrease)
        }

        const decrement = () => {
            setCounter(counter-1)
        }

        const reset = (noToReset=10) => {
            setCounter(noToReset)
        }

        return <Comp number={counter} increase={increment} decrease={decrement} makeZero={reset}/>
    }
    
        return NewComp
}

export default HighOrderComponent;

