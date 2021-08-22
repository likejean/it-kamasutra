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
    followUser: (userId) => instance.post(`follow/${userId}`).then(response => response.data),
    unfollowUser: (userId) => instance.delete(`follow/${userId}`).then(response => response.data),
    login: () => instance.get('auth/me/').then(response => response.data)
}



