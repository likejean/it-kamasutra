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

export const setUserAuthCreator = (id, email, login) => ({type: SET_USER_AUTH, credentials: {id, email, login}});

export default authReducer;