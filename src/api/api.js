import *  as axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0',
    withCredentials: true,
    headers: {
        "API-KEY": "375c9151-0086-4c8c-b275-8c5df4c76956"
    }
});

export const usersAPI = {
    getUsers: (currentPage = 1, pageSize = 10) => instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data),
    followUser: (userId) => instance.post(`follow/${userId}`).then(response => response.data),
    unfollowUser: (userId) => instance.delete(`follow/${userId}`).then(response => response.data)
}

export const profileAPI = {
    getUserProfile: (userId) => instance.get(`profile/${userId}`),
    getStatus: (userId) => instance.get(`profile/status/${userId}`),
    updateStatus: (status) => instance.put('profile/status', {status})
}

export const authAPI = {
    userLogin: () => instance.get('auth/me/')
}



