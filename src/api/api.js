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
    UnfollowToUser(id) {
        return instance
            .delete(`follow/${id}`)
    },
    FollowToUser(id) {
        return instance
            .post(`follow/${id}`)
    }
};

export const profileAPI = {
    getProfile(userId) {
        return instance
            .get(`profile/`+userId)
    },
    getStatus(userId) {
        return instance
            .get(`profile/status/`+userId)
    },
    setStatus(status) {
        return instance
            .put(`profile/status`, { status: status })
    }
};

export const authAPI = {
    authMe() {
        return instance
            .get('auth/me')
    }
};
