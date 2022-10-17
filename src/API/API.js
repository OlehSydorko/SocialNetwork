import * as axios from 'axios'

const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    'API-KEY': '04a045a0-4896-47f5-a57e-bf39bda6641b',
  },
})
export const usersAPI = {
  getUsers(currentPage = 1, pageSize = 10) {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data)
  },
  getProfile(userId = 2, aboutMe) {
    return instance.get(`profile/${userId || 2 + aboutMe}`).then(response => response.data)
  },
  toggleFollow(u = 1, isFollowed = false) {
    if (isFollowed) return instance.delete(`follow/${u.id}`).then(response => response.data)
    return instance.post(`follow/${u.id}`).then(response => response.data)
  },
}

export const loginAPI = {
  me() {
    return instance.get(`auth/me`).then(response => response.data)
  },
  login(email, password, isRememberMe = false, captcha = null) {
    return instance.post(`auth/login`, { email, password, isRememberMe, captcha }).then(response => {
      console.log('2', response)
      return response.data
    })
  },
  logOut() {
    return instance.delete(`auth/login`).then(response => response.data)
  },
  getCaptchaUrl() {
    return instance.get(`security/get-captcha-url`)
  },
}
