import React from 'react'
import { useSelector, useDispatch } from 'react-redux/es/exports'
import { toggleLogIn } from '../actions'

const Login = () => {
    const isLoggedIn = useSelector(({ auth }) => auth.isLoggedIn)

    const dispatch = useDispatch()

    const handleLogIn = () => {
        dispatch(toggleLogIn())
    }
    return (
        <>
            <h1 className='is-size-3'>{isLoggedIn ? 'You are Logged In' : 'You are Logged Out'}</h1>
            <button className='button is-success' onClick={handleLogIn}>{isLoggedIn ? 'Log Out': 'Log In'}</button>
        </>
    )
}

export default Login