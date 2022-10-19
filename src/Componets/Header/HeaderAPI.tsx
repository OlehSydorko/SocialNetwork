import * as React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Header from './Header'
import { setUserDataAC } from '../../Redux/auth.reducer'
import { loginAPI } from '../../API/API'

const HeaderAPI = () => {
  const dispatch = useDispatch()
  //@ts-ignore TODO
  const { isAuth, login } = useSelector(state => state.auth)

  useEffect(() => {
    loginAPI.me().then(data => {
      if (data.resultCode === 0) {
        const { id, email, login } = data
        dispatch(setUserDataAC(id, email, login, isAuth))
      }
    })
  }, [])

  return <Header isAuth={isAuth} login={login} />
}

export default HeaderAPI
