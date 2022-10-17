import styles from './Users.module.css'
import avatar from '../../axios/Images/avatar.png'
import { getFollow } from '../../Redux/Users_reducer'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import Pagination from './Pagination/Pagination'

const Users = ({ isLoading, onPageChanged, setCurrentPage }) => {
  const dispatch = useDispatch()
  const { users, isFetching } = useSelector(state => state.usersPage)

  const toggleFollow = (u, isFollowed) => {
    dispatch(getFollow(u, isFollowed))
  }

  return (
    <div>
      <Pagination onPageChanged={onPageChanged} setCurrentPage={setCurrentPage} />
      <div className={styles.usersContainer}>
        {users?.map(u => (
          <div key={u.id}>
            <span>
              <div>
                <NavLink to={'/profile/' + u.id}>
                  <img src={u.photos.small != null ? u.photos.small : avatar} className={styles.userPhoto} alt={''} />
                </NavLink>
              </div>
              <button disabled={isFetching || isLoading} onClick={() => toggleFollow(u, u.followed)}>
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
