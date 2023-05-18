import {AuthApi as authAPI} from "../api/api";

const SET_USER_DATA = 'SET_USER_DATA';

let initialState = {
    userId: null,
    login: null,
    email: null,
    isAuth: false

};
let authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        default:
            return state;
    }
}

export const setAuthUserData = (userId, login, email)=> ({type: SET_USER_DATA, data: {userId, login, email}});

export const getAuthUserData = ()=> {
    return(dispatch) => {
        authAPI.me().then(responce => {
          debugger
            if (responce.data.resultCode === 0) {
                let {id, login, email} = (responce.data.data)
                dispatch(setAuthUserData(id, login, email))
            }
        })
    }
}

export default authReducer;