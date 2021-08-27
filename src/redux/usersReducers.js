import {usersAPI} from "../api/api";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
const FOLLOWING_IN_PROGRESS= "FOLLOWING_IN_PROGRESS";

const initialState = {
    users: [],
    pageSize: 100,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: {
        userId: 0,
        inProgress: false
    },
    fake: 1
};


const userReducer = (state = initialState, action) => {

    switch (action.type) {
        // case "SET_FAKE":
        //     return {...state, fake: state.fake + 1}
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

        case SET_CURRENT_PAGE:
            return {
                ...state, currentPage: action.currentPage
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
export const setCurrentPageCreator = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});
export const setTotalUsersCreator = (usersCount) => ({type: SET_TOTAL_USERS_COUNT, usersCount});
export const toggleIsFetchingCreator = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});
export const toggleFollowingInProgressCreator = (userId, toggleMode) => ({type: FOLLOWING_IN_PROGRESS, followingInProgress: {userId, toggleMode}});

//Thunks
export const getUsersThunkCreator = (currentPage, pageSize) => (dispatch) => {
    dispatch(toggleIsFetchingCreator(true));
    usersAPI.getUsers(currentPage, pageSize)
        .then(data => {
            dispatch(toggleIsFetchingCreator(false));
            dispatch(setUsersCreator(data.items));
            dispatch(setTotalUsersCreator(data.totalCount));
        });
};


export const changeUsersPageThunkCreator = (currentPage, pageSize) => (dispatch) => {
    dispatch(setCurrentPageCreator(currentPage));
    dispatch(toggleIsFetchingCreator(true));
    usersAPI.getUsers(currentPage, pageSize)
        .then(data => {
            dispatch(toggleIsFetchingCreator(false));
            dispatch(setUsersCreator(data.items));
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