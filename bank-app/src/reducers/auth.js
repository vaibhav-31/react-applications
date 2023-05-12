const initialState = {
    isLoggedIn: false,
}

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'IS_LOGGED_IN':
            return {
                ...state,
                isLoggedIn: !state.isLoggedIn,
            }
        default:
            return state
    }
}