import {usersAPI} from "../api/api";

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
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return {...user, followed: true}
                    }
                    return user;
                })
            };

        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return {...user, followed: false}
                    }
                    return user;
                })
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
export const getUsersThunkCreator = (currentPage, pageSize) => (dispatch, getState) => {
    let friendsOnly = getState().usersPage.friendsOnly;
    if(friendsOnly) dispatch(toggleFriendsFilterCreator(false));
    dispatch(toggleIsFetchingCreator(true));

    usersAPI.getUsers(currentPage, pageSize)
        .then(data => {
            dispatch(toggleIsFetchingCreator(false));
            dispatch(setUsersCreator(data.items));
            dispatch(setTotalUsersCreator(data.totalCount));
        });
};

export const getFriendsThunkCreator = (currentPage, pageSize, friendship) => (dispatch, getState) => {
    let friendsOnly = getState().usersPage.friendsOnly;
    if(!friendsOnly) dispatch(toggleFriendsFilterCreator(true));
    dispatch(toggleIsFetchingCreator(true));

    usersAPI.getFriends(currentPage, pageSize, friendship)
        .then(data => {
            dispatch(toggleIsFetchingCreator(false));
            dispatch(setFriendsCreator(data.items));
            dispatch(setTotalUsersCreator(data.totalCount));
        });
};

export const changeUsersPageThunkCreator = (currentPage, pageSize) => (dispatch, getState) => {
    dispatch(setCurrentPageCreator(currentPage));
    dispatch(toggleIsFetchingCreator(true));
    let friendsOnly = getState().usersPage.friendsOnly;
    if(!friendsOnly) usersAPI.getUsers(currentPage, pageSize)
        .then(data => {
            dispatch(toggleIsFetchingCreator(false));
            dispatch(setUsersCreator(data.items));
        });
    else usersAPI.getFriends(currentPage, pageSize, true)
        .then(data => {
            dispatch(toggleIsFetchingCreator(false));
            dispatch(setFriendsCreator(data.items));
        });
};

export const followUserThunkCreator = (userId) => (dispatch) => {
    dispatch(toggleFollowingInProgressCreator(userId, true));
    usersAPI.followUser(userId).then(data => {
        if (data.resultCode === 0) {
            dispatch(followUserCreator(userId));
            dispatch(toggleFollowingInProgressCreator(0, false));
        }
    });

}

export const unfollowUserThunkCreator = (userId) => (dispatch) => {
    dispatch(toggleFollowingInProgressCreator(userId, true));
    usersAPI.unfollowUser(userId).then(data => {
        if (data.resultCode === 0) {
            dispatch(unfollowUserCreator(userId));
            dispatch(toggleFollowingInProgressCreator(0, false));
        }
    });

}

export default userReducer;