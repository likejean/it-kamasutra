import {usersAPI} from "../api/api";
import {followUserStatusSelector} from "./utils/toggleFollowUser";
import {copyObjectsInState} from "./utils/copyObjectsInState";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_FRIENDS = "SET_FRIENDS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
const FOLLOWING_IN_PROGRESS= "FOLLOWING_IN_PROGRESS";
const TOGGLE_FRIENDS_FILTER = "TOGGLE_FRIENDS_FILTER";

const initialState = {
    users: [],
    pageSize: 20,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: {
        userId: 0,
        inProgress: false
    },
    friendsOnly: false
};


const userReducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: copyObjectsInState(state.users, action.userId, "id", {followed: true})
            };

        case UNFOLLOW:
            return {
                ...state,
                users: copyObjectsInState(state.users, action.userId, "id", {followed: false})
            };

        case SET_USERS:
            return {
                ...state,
                users: action.users
            };

        case SET_FRIENDS:
            return {
                ...state,
                users: action.friends
            };

        case SET_CURRENT_PAGE:
            return {
                ...state, currentPage: action.currentPage
            };
        case TOGGLE_FRIENDS_FILTER:
            return {
                ...state, friendsOnly: action.status
            };
        case SET_TOTAL_USERS_COUNT:
            return {
                ...state, totalUsersCount: action.usersCount
            }
        case TOGGLE_IS_FETCHING: {
            return {...state, isFetching: action.isFetching}
        }
        case FOLLOWING_IN_PROGRESS: {
            return {
                ...state,
                followingInProgress: {
                    ...state.followingInProgress,
                    userId: action.followingInProgress.userId,
                    toggleMode: action.followingInProgress.toggleMode}
            }
        }
        default:
            return state;
    }
}

//Actions
export const followUserCreator = (userId) => ({type: FOLLOW, userId});
export const unfollowUserCreator = (userId) => ({type: UNFOLLOW, userId});
export const setUsersCreator = (users) => ({type: SET_USERS, users});
export const toggleFriendsFilterCreator = (status) => ({type: TOGGLE_FRIENDS_FILTER, status});
export const setFriendsCreator = (friends) => ({type: SET_FRIENDS, friends});
export const setCurrentPageCreator = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});
export const setTotalUsersCreator = (usersCount) => ({type: SET_TOTAL_USERS_COUNT, usersCount});
export const toggleIsFetchingCreator = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});
export const toggleFollowingInProgressCreator = (userId, toggleMode) => ({type: FOLLOWING_IN_PROGRESS, followingInProgress: {userId, toggleMode}});

//Thunks
export const getUsersThunkCreator = (currentPage, pageSize) => async (dispatch, getState) => {
    let friendsOnly = getState().usersPage.friendsOnly;
    if(friendsOnly) dispatch(toggleFriendsFilterCreator(false));
    dispatch(toggleIsFetchingCreator(true));

    let data = await usersAPI.getUsers(currentPage, pageSize);
    dispatch(toggleIsFetchingCreator(false));
    dispatch(setUsersCreator(data.items));
    dispatch(setTotalUsersCreator(data.totalCount));

};

export const getFriendsThunkCreator = (currentPage, pageSize, friendship) => async (dispatch, getState) => {
    let friendsOnly = getState().usersPage.friendsOnly;
    if(!friendsOnly) dispatch(toggleFriendsFilterCreator(true));
    dispatch(toggleIsFetchingCreator(true));

    let data = await usersAPI.getFriends(currentPage, pageSize, friendship);
    dispatch(toggleIsFetchingCreator(false));
    dispatch(setFriendsCreator(data.items));
    dispatch(setTotalUsersCreator(data.totalCount));
};

export const changeUsersPageThunkCreator = (currentPage, pageSize) => async (dispatch, getState) => {
    dispatch(setCurrentPageCreator(currentPage));
    dispatch(toggleIsFetchingCreator(true));
    let friendsOnly = getState().usersPage.friendsOnly;
    if(!friendsOnly) {
        let data = await usersAPI.getUsers(currentPage, pageSize);
        dispatch(toggleIsFetchingCreator(false));
        dispatch(setUsersCreator(data.items));
    }
    else {
        let data = await usersAPI.getFriends(currentPage, pageSize, true);
        dispatch(toggleIsFetchingCreator(false));
        dispatch(setFriendsCreator(data.items));
    }
};

export const followUserThunkCreator = (userId) => async (dispatch) => {
    let apiMethod = usersAPI.followUser.bind(userId);
    await followUserStatusSelector(dispatch, userId, followUserCreator, toggleFollowingInProgressCreator, apiMethod);
}

export const unfollowUserThunkCreator = (userId) => async (dispatch) => {
    let apiMethod = usersAPI.unfollowUser.bind(userId);
    await followUserStatusSelector(dispatch, userId, unfollowUserCreator, toggleFollowingInProgressCreator, apiMethod);
}

export default userReducer;