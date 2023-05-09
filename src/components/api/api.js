import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {"API-KEY": "61ad3746-7627-4c8c-b7d8-603828dd61ca"}
})

export const UsersAPI = {
    /*Запрашиваем пользователей */
    getUsers(currentPage, pageSize = 10) {
        return instance.get(`users?page=${currentPage} &count=${pageSize}`).then(responce => {
            return responce.data
        })
    },
    /*Меняем страницу, запрашиваем новых пользователей */
    getUsers2(pageNumber, pageSize) {
        return instance.get(`users?page=${pageNumber} &count=${pageSize}`).then(responce => {
            return responce.data
        })
    },
    unfollowUser(u) {
        return instance.delete(`follow/${u.id}`).then(responce => {
            return responce.data
        })
    },
    followUser(u) {
        return instance.post(`follow/${u.id}`).then(responce => {
            return responce.data
        })
    },
    }


