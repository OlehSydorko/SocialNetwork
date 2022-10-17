import React from 'react'
import { useSelector } from 'react-redux'
import Buttons from './Buttons'

const Pagination = ({ setCurrentPage, onPageChanged }) => {
  const { pageSize, totalUsersCount, currentPage, isFetching } = useSelector(state => state.usersPage)

  const pagesCount = Math.ceil(totalUsersCount / pageSize)
  const pages = []
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i)
  }
  return (
    <Buttons
      onPageChanged={onPageChanged}
      setCurrentPage={setCurrentPage}
      currentPage={currentPage}
      pagesCount={pagesCount}
      pages={pages}
      isFetching={isFetching}
    />
  )
}

export default Pagination
