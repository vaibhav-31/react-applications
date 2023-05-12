import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { buyCake, buyIceCream } from "../Redux/Index";

const HooksCakeComponent = () => {
   const numOfCakes =  useSelector(state => state.numOfCakes)
   const numOfIceCreams = useSelector(state => state.numOfIceCreams)
   const dispatch = useDispatch()

  return (
      <>
         <h2>Number of cakes - {numOfCakes}</h2>
         <button onClick={() => dispatch(buyCake())}>Buy Cake</button>
         <h2>Number of IceCreams - {numOfIceCreams}</h2>
         <button onClick={() => dispatch(buyIceCream())}>Buy IceCreams</button>
      </>
  )
}

export default HooksCakeComponent