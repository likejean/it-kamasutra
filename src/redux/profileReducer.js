import {profileAPI} from "../api/api";

const ADD_POST = "ADD_POST";
const DELETE_POST = "DELETE_POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_STATUS = "SET_STATUS";
const SAVE_PHOTO = "SAVA_PHOTOS";
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
            return {...state, posts: state.posts.concat(newPost)};

        case DELETE_POST:
            return {...state, posts: state.posts.filter(item => item.id !== action.postId)};

        case TOGGLE_IS_FETCHING_STATUS:
            return {...state, isStatusFetching: action.isStatusFetching}

        case SET_USER_PROFILE:
            return {...state, profile: action.profile}

        case SAVE_PHOTO:
            return {...state, profile: {...state.profile, photos: action.photos}}

        case SET_STATUS:
            return {...state, status: action.status}

        default:
            return state;
    }
}

//Actions
export const addPostCreator = (newPostText) => ({type: ADD_POST, newPostText});
export const savePhotoSuccess = (photos) => ({type: SAVE_PHOTO, photos});
export const deletePostCreator = (postId) => ({type: DELETE_POST, postId});
export const setUserProfileCreator = (profile) => ({type: SET_USER_PROFILE, profile});
export const setStatusCreator = (status) => ({type: SET_STATUS, status});
export const loadingUserStatusCreator = (isStatusFetching) => ({type: TOGGLE_IS_FETCHING_STATUS, isStatusFetching});

//Thunks
export const setUserProfileThunkCreator = (userId) => async (dispatch) => {
    let promise = await profileAPI.getUserProfile(userId);
    dispatch(setUserProfileCreator(promise.data));

}

export const getUserStatusThunkCreator = (userId) => async (dispatch, getState) => {
    const state = getState();
    if(!state.profilePage.isStatusFetching) dispatch(loadingUserStatusCreator(true));
    let promise = await profileAPI.getStatus(userId);
    dispatch(setStatusCreator(promise.data));
    await dispatch(loadingUserStatusCreator(false));
}

export const updateUserStatusThunkCreator = (status) => async (dispatch, getState) => {
    const state = getState();
    if(!state.profilePage.isStatusFetching) dispatch(loadingUserStatusCreator(true));
    let promise = await profileAPI.updateStatus(status);
    if(promise.data.resultCode === 0) {
        dispatch(setStatusCreator(status));
    }
    await dispatch(loadingUserStatusCreator(false));
}

export const savePhotoThunkCreator = (photo) => async (dispatch) => {

    let response = await profileAPI.savePhoto(photo);

    if(response.data.resultCode === 0) {
        dispatch(savePhotoSuccess(response.data.data.photos));
    }

}

export default profileReducer;