import {authAPI} from "../api/api";

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
                ...action.credentials,
                isAuth: true
            }

        default:
            return state;
    }
}

//Actions

const setUserAuthCreator = (id, email, login) => ({type: SET_USER_AUTH, credentials: {id, email, login}});

//Thunks

export const userLoginThunkCreator = () => (dispatch) => {
    authAPI.userLogin().then(response => {
        if (response.data.resultCode === 0) {
            let {id, login, email} = response.data.data;
            dispatch(setUserAuthCreator(id, email, login));
        }
    }).catch(err => console.log(err));
}

export default authReducer;