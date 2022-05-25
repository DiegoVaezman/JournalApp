import { types } from "../types/types"

export const startLoginEmailPassword = (email, password) => {
    return (dispatch) => {
        setTimeout(() => {
            dispatch(login(email, password))
        }, 1500);

        setTimeout(() => {
            dispatch(login('nnnnn', '123456789'))
        }, 3000);
    }
}

export const login = (uid, displayName) => ({
        type: types.login,
        payload: {
            uid,
            displayName
        }
    }
)