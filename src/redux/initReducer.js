import {userLoginThunkCreator} from "./authReducer";

const SET_INIT_SUCCESS = 'SET_INIT_SUCCESS';

const initialState = {
    initialized: false
};


const initReducer = (state = initialState, action) => {

    switch(action.type) {
        case SET_INIT_SUCCESS:
            return {
                ...state,
                initialized: true
            }
        default:
            return state;
    }
}

//Actions
const initAppSuccess = () => ({type: SET_INIT_SUCCESS});

//Thunks
export const initAppThunkCreator = () => (dispatch) => {
    dispatch(userLoginThunkCreator()).then(() => dispatch(initAppSuccess()));
}


export default initReducer;