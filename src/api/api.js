import *  as axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0',
    withCredentials: true,
    headers: {
        "API-KEY": "e225716d-224e-40c8-9200-e6ce59052ef6"
    }
});

export const usersAPI = {
    getUsers: (currentPage = 1, pageSize = 10) => instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data),
    getFriends: (currentPage = 1, pageSize = 10, friendship) => instance.get(`users?page=${currentPage}&count=${pageSize}&friend=${friendship}`).then(response => response.data),
    followUser: (userId) => instance.post(`follow/${userId}`).then(response => response.data),
    unfollowUser: (userId) => instance.delete(`follow/${userId}`).then(response => response.data)
}

export const profileAPI = {
    getUserProfile: (userId) => instance.get(`profile/${userId}`),
    getStatus: (userId) => instance.get(`profile/status/${userId}`),
    updateStatus: (status) => instance.put('profile/status', {status}),
    savePhoto: (photoFile) => {
        const formData = new FormData();
        formData.append('image', photoFile);
        return instance.put('profile/photo', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
    }
}

export const authAPI = {
    me: () => instance.get('auth/me/'),
    login: (email, password, rememberMe = false) => instance.post('auth/login', { email, password, rememberMe }),
    logout: () => instance.delete('auth/login')
}



