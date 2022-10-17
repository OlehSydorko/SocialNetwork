import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

import hidden_password from '../../axios/Images/hidden_password.png'
import { loginAPI } from '../../API/API'
import { getTouched } from '../../Redux/login_reducer'
import { getAuthUserData, getCaptchaUrl, getErrorAC } from '../../Redux/auth.reducer'
import styles from './Login.module.css'

const Login = () => {
  const dispatch = useDispatch()
  const { isFetching } = useSelector(state => state.usersPage)
  const { isAuth, errMessages, captchaUrl } = useSelector(state => state.auth)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [captchaInput, setCaptchaInput] = useState('')
  const [isShown, setIsShown] = useState(false)
  const [isRememberMe, setIsRememberMe] = useState(false)

  const onLogin = () => {
    loginAPI.login(email, password, isRememberMe, captchaInput).then(data => {
      if (data.resultCode === 0) {
        const { id, email, login } = data
        dispatch(getAuthUserData(id, email, login))
      } else {
        if (data.resultCode === 10) {
          dispatch(getCaptchaUrl(captchaInput))
        }
        dispatch(getErrorAC(data.messages))
      }
    })
  }

  const toggleLogin = () => {
    dispatch(getTouched())
    onLogin()
  }

  return isAuth ? (
    <Navigate to='/profile' />
  ) : (
    <div>
      <h1>Login</h1>
      <div className={styles.email}>
        {errMessages?.map(err => (
          <div className={styles.errMessages} key={err}>
            {err}
          </div>
        ))}
        <h5>Email</h5>
        <input value={email} onChange={event => setEmail(event.target.value)} name={'email'} />
      </div>
      <div className={styles.login}>
        <h5>Password</h5>
        <input
          value={password}
          onChange={event => setPassword(event.target.value)}
          name={'password'}
          type={isShown ? 'text' : 'password'}
        />
        <span onClick={() => setIsShown(p => !p)}>
          <img src={hidden_password} className={styles.hide_button} alt={''} />
        </span>
      </div>
      RememberMe
      <input type={'checkbox'} onChange={() => setIsRememberMe(isRememberMe => !isRememberMe)} />
      {captchaUrl && (
        <div>
          <img src={captchaUrl} alt={''} />
          <div>
            <input value={captchaInput} onChange={event => setCaptchaInput(event.target.value)} name={'captchaInput'} />
          </div>
        </div>
      )}
      <div className={styles.button}>
        <button onClick={toggleLogin} disabled={isFetching}>
          Login
        </button>
      </div>
    </div>
  )
}

export default Login
