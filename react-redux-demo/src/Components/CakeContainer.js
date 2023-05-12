import React from "react";
import { connect } from "react-redux";
import { buyCake } from "../Redux/Index";

function CakeContainer(props) {
    return (
        <>
         <h2>Number of cakes - {props.numOfCakes} </h2>
         <button onClick={props.buyCake}>Buy Cake</button>
        </>
    )
}     

const mapStateToProps = state => {
    return {
        numOfCakes: state.numOfCakes
    }
}

const mapDispatchToProps = dispatch => {
    return {
        buyCake: () => dispatch(buyCake())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer)