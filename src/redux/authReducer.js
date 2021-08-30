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

export const userLoginThunkCreator = () => async (dispatch) => {
    let promise = await authAPI.me();
    if (promise.data.resultCode === 0) {
        let {id, login, email} = promise.data.data;
        dispatch(setUserAuthCreator(id, email, login, true));
    }
}

export const login = (email, password, rememberMe) => async (dispatch) => {

    try {
        let promise = await authAPI.login(email, password, rememberMe)
        if (promise.data.resultCode === 0) {
            dispatch(userLoginThunkCreator())
        }else{
            let message = promise.data.messages.length > 0 ? promise.data.messages[0] : 'Something went wrong...';
            dispatch(stopSubmit("login", {_error: message}));
        };
    }
    catch(error){
        console.log('Error!');
    }
}

export const logout = () => async (dispatch) => {
    let promise = await authAPI.logout();
    if (promise.data.resultCode === 0) {
        dispatch(setUserAuthCreator(null, null, null, false))
    }
}

export default authReducer;