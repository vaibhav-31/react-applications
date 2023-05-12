export const deposit = amount => {
    return {
        type: 'DEPOSIT',
        payload: amount,
    }
}

export const withDraw = amount => {
    return {
        type: 'WITHDRAW',
        payload: amount,
    }
}

export const collectInterest = () => {
    return {
        type: 'COLLECT_INTEREST',
    }
}

export const deleteAccount = () => {
    return {
        type: 'DELETE_ACCOUNT',
    }
}

export const toggleAccount = () => {
    return {
        type: 'TOGGLE',
    }
}

export const toggleLogIn = () => {
    return {
        type: 'IS_LOGGED_IN',
    }
}