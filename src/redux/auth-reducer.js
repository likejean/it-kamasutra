const SET_USER_AUTH = "SET_USER_AUTH";

const initialState = {
    userId: null,
    email: null,
    login: null
};


const authReducer = (state = initialState, action) => {

    switch(action.type) {
        case SET_USER_AUTH:
            return {
                ...state,
                ...action.credentials
            }

        default:
            return state;
    }
}

//Actions

export const setUserAuthCreator = (userId, email, password) => ({type: SET_USER_AUTH, credentials: {userId, email, password}});

export default authReducer;