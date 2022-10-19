import React, { FC, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUsers, setCurrentPageAC } from '../../Redux/Users_reducer'
import Users from './Users'
import PreLoader from '../Common/PreLoader'

const UsersAPIComponent: FC = () => {
  const dispatch = useDispatch()
  //@ts-ignore TODO
  const { users, isFetching } = useSelector(state => state.usersPage)
  useEffect(() => {
    if (users.length === 0) {
      dispatch(getUsers())
    }
  }, [])

  const setCurrentPage = (pageNumber: number) => {
    dispatch(setCurrentPageAC(pageNumber))
  }
  const onPageChanged = (pageNumber: number) => {
    dispatch(getUsers(pageNumber))
  }
  return (
    <>
      {isFetching ? <PreLoader /> : null}
      <Users onPageChanged={onPageChanged} setCurrentPage={setCurrentPage} />
    </>
  )
}
export default UsersAPIComponent
