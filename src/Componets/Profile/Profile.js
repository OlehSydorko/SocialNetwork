import ProfileInfo from './Post/ProfileInfo/ProfileInfo'
import { useEffect } from 'react'
import { getProfile } from '../../Redux/Profile_reducer'
import { Navigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import classes from './Profile.module.css'
import MyPostsAPI from './Post/MyPostsAPI'

const Profile = () => {
  const dispatch = useDispatch()
  const profilePage = useSelector(state => state.profilePage)
  const auth = useSelector(state => state.auth)
  const { userId } = useParams()
  const isAuth = auth.isAuth
  const profile = profilePage.profile

  useEffect(() => {
    dispatch(getProfile(userId))
  }, [])

  if (isAuth === false) return <Navigate to={'/login'} />
  return (
    <div className={classes.content}>
      <ProfileInfo profile={profile} />
      <MyPostsAPI />
    </div>
  )
}
export default Profile
