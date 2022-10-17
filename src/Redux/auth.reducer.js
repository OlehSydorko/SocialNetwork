import { loginAPI } from '../API/API'

const setIsAuth = 'SET_IS_AUTH'
const getError = 'GET_ERROR'
const setUserData = 'SET_USER_DATA'
const getCaptchaUrlSuccess = 'GET_CAPTCHA_URL_SUCCESS'
const initialState = {
  userId: null,
  email: null,
  login: null,
  isAuth: false,
  errMessages: [],
  captchaUrl: null,
}
const auth_reducer = (state = initialState, action) => {
  switch (action.type) {
    case setUserData:
    case getError:
    case getCaptchaUrlSuccess:
      return {
        ...state,
        ...action.payload,
      }
    case setIsAuth:
      return {
        ...state,
        ...action.payload,
        isAuth: true,
      }
    default:
      return state
  }
}
export const setUserDataAC = (userId, email, login, isAuth) => {
  return {
    type: setUserData,
    setIsAuth,
    payload: { userId, email, login, isAuth },
  }
}
export const getCaptchaUrlAC = captchaUrl => {
  return {
    type: getCaptchaUrlSuccess,
    payload: { captchaUrl },
  }
}
export const getErrorAC = errMessages => {
  return {
    type: getError,
    payload: { errMessages },
  }
}
export const getAuthUserData = () => dispatch => {
  loginAPI.me().then(data => {
    if (data.resultCode === 0) {
      const { id, login, email } = data
      dispatch(setUserDataAC(id, email, login, true))
    }
  })
}
export const login = (email, password, isRememberMe, captchaInput) => dispatch => {
  loginAPI.login(email, password, isRememberMe, captchaInput).then(data => {
    if (data.resultCode === 0) {
      dispatch(getAuthUserData())
    }
  })
}
export const logOut = () => dispatch => {
  loginAPI.logOut().then(data => {
    if (data.resultCode === 0) {
      dispatch(setUserDataAC(null, null, null, false))
    }
  })
}
export const getCaptchaUrl = () => dispatch => {
  loginAPI.getCaptchaUrl().then(response => {
    const captchaUrl = response.data.url
    dispatch(getCaptchaUrlAC(captchaUrl))
  })
}

export default auth_reducer
