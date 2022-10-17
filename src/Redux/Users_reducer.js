import { usersAPI } from '../API/API'

const follow = 'FOLLOW'
const unfollow = 'UNFOLLOW'
const setUsers = 'SET_USERS'
const setCurrentPage = 'SET_CURRENT_PAGE'
const setUsersTotalCount = 'SET_USERS_TOTAL_COUNT'
const toggleIsFetching = 'TOGGLE_IS_FETCHING'
const toggleIsFollowingProgress = 'TOGGLE_IS_FOLLOWING_PROGRESS'
const initialState = {
  users: [],
  pageSize: 10,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: false,
  followingInProgress: false,
}
const users_reducer = (state = initialState, action) => {
  switch (action.type) {
    case follow:
      return {
        ...state,
        users: state.users.map(u => (u.id === action.userId ? { ...u, followed: true } : u)),
      }

    case unfollow:
      return {
        ...state,
        users: state.users.map(u => (u.id === action.userId ? { ...u, followed: false } : u)),
      }
    case setUsers: {
      return {
        ...state,
        users: [...action.users],
      }
    }
    case setCurrentPage:
      return {
        ...state,
        currentPage: action.currentPage,
      }
    case setUsersTotalCount:
      return {
        ...state,
        totalUsersCount: action.count,
      }
    case toggleIsFetching:
    case toggleIsFollowingProgress:
      return {
        ...state,
        isFetching: action.isFetching,
      }
    default:
      return state
  }
}
export const followAc = userId => {
  return {
    type: follow,
    userId,
  }
}
export const unfollowAc = userId => {
  return {
    type: unfollow,
    userId,
  }
}
export const setUsersAC = users => {
  return {
    type: setUsers,
    users,
  }
}
export const setUsersTotalCountAC = count => {
  return {
    type: setUsersTotalCount,
    count,
  }
}
export const toggleIsFetchingAC = isFetching => {
  return {
    type: toggleIsFetching,
    isFetching,
  }
}
export const setCurrentPageAC = currentPage => {
  return {
    type: setCurrentPage,
    currentPage,
  }
}
export const toggleIsFollowingProgressAC = isFetching => {
  return {
    type: toggleIsFollowingProgress,
    isFetching,
  }
}
export const toggleIsTouchingProgressAC = isFetching => {
  return {
    type: toggleIsFetching,
    isFetching,
  }
}

export const getUsers = (currentPage, pageSize) => {
  return dispatch => {
    dispatch(toggleIsFetchingAC(true))
    usersAPI.getUsers(currentPage, pageSize).then(data => {
      dispatch(toggleIsFetchingAC(false))
      dispatch(setUsersAC(data.items))
      dispatch(setUsersTotalCountAC(data.totalCount))
    })
  }
}
export const getFollow = (u, isFollowed) => {
  return dispatch => {
    dispatch(toggleIsFollowingProgressAC(true))
    usersAPI.toggleFollow(u, isFollowed).then(data => {
      if (data.resultCode === 0) {
        if (isFollowed) dispatch(unfollowAc(u.id))
        else dispatch(followAc(u.id))
      }
      dispatch(toggleIsFollowingProgressAC(false))
    })
  }
}

export default users_reducer
