const SIGNIN_SUCCESS = "SIGNIN_SUCCESS";
const SIGNIN_FAIL = "SIGNIN_FAIL";
const SIGNOUT = "SIGNOUT";

export const signInSuccess = (token) => {
    return {
        type: SIGNIN_SUCCESS,
        payload: token,
    }
}

export const signInFailed = (error) => {
    return {
        type: SIGNIN_FAIL,
        payload: error,
    }
}

export const signOut = () => {
    return {
        type: SIGNOUT,
    }
} 

export const GET_USERPROFILE = "GET_USERPROFILE"
export const EDIT_USERNAME = "EDIT_USERNAME"

export const userProfile = (userData) => {
    return {
        type: GET_USERPROFILE,
        payload: userData,
    }
}


export const updateUsername = (username) => {
    return {
        type: EDIT_USERNAME,
        payload: username,
    }
}