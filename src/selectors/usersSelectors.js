import {createSelector} from "reselect";


export const getUsers = (state) => {
    return state.usersPage.users;
}

export const getUsersFilteredByPhotoPresent = createSelector(
    (state) => state.usersPage.users,
    (items) => items.filter(item => item.photos.small !== null)
)

export const getPageSize = (state) => {
    return state.usersPage.pageSize;
}


export const getTotalUsersCount = (state) => {
    return state.usersPage.totalUsersCount;
}

export const getCurrentPage = (state) => {
    return state.usersPage.currentPage;
}

export const getIsFetching = (state) => {
    return state.usersPage.isFetching;
}

export const getFollowingInProgress = (state) => {
    return state.usersPage.followingInProgress;
}

export const getIsAuth = (state) => {
    return state.auth.isAuth;
}

export const  getFriendsFilterStatus = (state) => {
    return state.usersPage.friendsOnly;
}
