import { FC } from 'react'
import styles from './Users.module.css'
import avatar from '../../axios/Images/avatar.png'
import { getFollow } from '../../Redux/Users_reducer'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import Pagination from './Pagination/Pagination'
import { UserType } from '../../types'

export type PropsType = {
  onPageChanged: (pageNumber: number) => void
  setCurrentPage: (pageNumber: number) => void
}

const Users: FC<PropsType> = ({ onPageChanged, setCurrentPage }) => {
  console.log(onPageChanged)
  const dispatch = useDispatch()
  //@ts-ignore TODO
  const { users, isFetching } = useSelector(state => state.usersPage)
  const _users: UserType[] = users

  const toggleFollow = (u: UserType, isFollowed: boolean) => {
    dispatch(getFollow(u, isFollowed))
  }

  return (
    <div>
      <Pagination onPageChanged={onPageChanged} setCurrentPage={setCurrentPage} />
      <div className={styles.usersContainer}>
        {_users?.map(u => (
          <div key={u.id}>
            <span>
              <div>
                <NavLink to={'/profile/' + u.id}>
                  <img src={u.photos.small != null ? u.photos.small : avatar} className={styles.userPhoto} alt={''} />
                </NavLink>
              </div>
              <button disabled={isFetching} onClick={() => toggleFollow(u, u.followed)}>
                {u.followed ? 'unFollow' : 'follow'}
              </button>
            </span>
            <span>
              <div>{u.name}</div>
              <div>{u.status}</div>
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Users
