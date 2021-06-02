import * as axios from "axios";

const instance = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    withCredentials: true,
    headers: {
        "API-KEY": "bbaeb649-5dd8-4710-a4e8-3781d01da372"
    }
});

export const usersAPI = {
  getUsers(currentPage, pageSize) {
      return instance
          .get(`users?page=${currentPage}&count=${pageSize}`)
          .then(response => response.data)
  },
  getUsersPagination(pageNumber, pageSize) {
      return instance
          .get(`users?page=${pageNumber}&count=${pageSize}`)
          .then(response => response.data)
  },
    UnfollowToUser(id) {
        return instance
            .delete(`https://social-network.samuraijs.com/api/1.0/follow/${id}`, {
                withCredentials: true,
                headers: {
                    "API-KEY": "bbaeb649-5dd8-4710-a4e8-3781d01da372"
                }
            })
    },
    FollowToUser(id) {
        return instance
            .post(`https://social-network.samuraijs.com/api/1.0/follow/${id}`, {}, {
                withCredentials: true,
                headers: {
                    "API-KEY": "bbaeb649-5dd8-4710-a4e8-3781d01da372"
                }
            })
    }
};