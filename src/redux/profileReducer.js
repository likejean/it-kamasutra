import {profileAPI} from "../api/api";

const ADD_POST = "ADD_POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_STATUS = "SET_STATUS";
const TOGGLE_IS_FETCHING_STATUS = "TOGGLE_IS_FETCHING_STATUS";

const initialState = {
    posts: [
        {id: 1, message: 'Great! Samurai 2.0!', likes: 24},
        {id: 2, message: 'I love it!!!', likes: 45},
        {id: 3, message: 'This tutorial is awesome!', likes: 452}
    ],
    profile: null,
    isStatusFetching: false,
    status: ''
};


const profileReducer = (state = initialState, action) => {

    switch(action.type) {
        case ADD_POST:
            let newPost = {
                id: state.posts.length + 1,
                message: action.newPostText,
                likes: 1
            };
            return {...state, newPostText: '', posts: state.posts.concat(newPost)};

        case TOGGLE_IS_FETCHING_STATUS:
            return {...state, isStatusFetching: action.isStatusFetching}

        case SET_USER_PROFILE:
            return {...state, profile: action.profile}

        case SET_STATUS:
            return {...state, status: action.status}

        default:
            return state;
    }
}

//Actions
export const addPostCreator = (newPostText) => ({type: ADD_POST, newPostText});
export const setUserProfileCreator = (profile) => ({type: SET_USER_PROFILE, profile});
export const setStatusCreator = (status) => ({type: SET_STATUS, status});
export const loadingUserStatusCreator = (isStatusFetching) => ({type: TOGGLE_IS_FETCHING_STATUS, isStatusFetching});

//Thunks
export const setUserProfileThunkCreator = (userId) => (dispatch) => {
    profileAPI.getUserProfile(userId).then(response => {
        dispatch(setUserProfileCreator(response.data));
    });
}

export const getUserStatusThunkCreator = (userId) => (dispatch, getState) => {
    const state = getState();
    if(!state.profilePage.isStatusFetching) dispatch(loadingUserStatusCreator(true));
    profileAPI.getStatus(userId).then(response => {
        dispatch(setStatusCreator(response.data));
    }).then(() => dispatch(loadingUserStatusCreator(false)));
}

export const updateUserStatusThunkCreator = (status) => (dispatch, getState) => {
    const state = getState();
    if(!state.profilePage.isStatusFetching) dispatch(loadingUserStatusCreator(true));
    profileAPI.updateStatus(status).then(response => {
        if(response.data.resultCode === 0) {
            dispatch(setStatusCreator(status));
        }
    }).then(() => dispatch(loadingUserStatusCreator(false)));
}

export default profileReducer;