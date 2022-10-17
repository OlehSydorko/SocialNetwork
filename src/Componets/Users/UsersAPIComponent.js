import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUsers, setCurrentPageAC } from '../../Redux/Users_reducer'
import Users from './Users'
import PreLoader from '../Common/PreLoader'
const UsersAPIComponent = () => {
  const dispatch = useDispatch()
  const [isLoading] = useState(false)
  const { users, isFetching } = useSelector(state => state.usersPage)
  useEffect(() => {
    if (users.length === 0) {
      dispatch(getUsers())
    }
  }, [])

  const setCurrentPage = pageNumber => {
    dispatch(setCurrentPageAC(pageNumber))
  }
  const onPageChanged = pageNumber => {
    dispatch(getUsers(pageNumber))
  }
  return (
    <>
      {isFetching || isLoading ? <PreLoader /> : null}
      <Users onPageChanged={onPageChanged} isLoading={isLoading} setCurrentPage={setCurrentPage} />
    </>
  )
}
export default UsersAPIComponent
