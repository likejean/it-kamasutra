import {authAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_USER_AUTH = "SET_USER_AUTH";

const initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false
};


const authReducer = (state = initialState, action) => {

    switch(action.type) {
        case SET_USER_AUTH:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state;
    }
}

//Actions

export const setUserAuthCreator = (id, email, login, isAuth) => ({type: SET_USER_AUTH, payload: {id, email, login, isAuth}});

//Thunks

export const userLoginThunkCreator = () => (dispatch) => {
    return authAPI.me().then(response => {
        if (response.data.resultCode === 0) {
            let {id, login, email} = response.data.data;
            dispatch(setUserAuthCreator(id, email, login, true));
        }
    }).catch(err => console.log(err));
}

export const login = (email, password, rememberMe) => (dispatch) => {


    authAPI.login(email, password, rememberMe).then(response => {
        if (response.data.resultCode === 0) {
            dispatch(userLoginThunkCreator())
        }else{
            let message = response.data.messages.length > 0 ? response.data.messages[0] : 'Something went wrong...';
            dispatch(stopSubmit("login", {_error: message}));
        }
    }).catch(err => console.log(err));
}

export const logout = () => (dispatch) => {
    authAPI.logout().then(response => {
        if (response.data.resultCode === 0) {
            dispatch(setUserAuthCreator(null, null, null, false))
        }
    }).catch(err => console.log(err));
}

export default authReducer;