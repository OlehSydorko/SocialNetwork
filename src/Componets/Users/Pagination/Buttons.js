import React from 'react'
import styles from './pagination.module.css'

const PAGINATION_COUNT = 10

const Buttons = ({ pages, ...props }) => {
  const { currentPage, onPageChanged, setCurrentPage, isFetching, isLoading } = props
  const onClickNext = () => {
    const currentNext = currentPage + 1
    onPageChanged(currentNext)
    setCurrentPage(currentNext)
  }
  const onClickBack = () => {
    const currentBack = currentPage - 1
    onPageChanged(currentBack)
    setCurrentPage(currentBack)
  }

  const prevPages = pages?.filter(p => currentPage - p <= 5 && currentPage >= p)

  const nextCount = PAGINATION_COUNT - prevPages.length - 1
  const nextPages = pages?.filter(
    p => currentPage + nextCount >= p && currentPage + nextCount <= pages.length && currentPage < p
  )
  const lastPages = pages?.filter(p => p >= pages.length - 1 && p >= 2 && currentPage <= p - PAGINATION_COUNT)
  const firstPages = pages?.filter(p => p >= 0 && p <= pages.length && p <= 2 && currentPage >= p + PAGINATION_COUNT)

  return (
    <div className={styles.buttonContainer}>
      <button onClick={onClickBack} disabled={isFetching || isLoading}>
        {'<'}
      </button>
      {firstPages?.map(p => (
        <Button key={p} p={p} {...props} />
      ))}
      {!!firstPages.length && <div className={styles.dots}>...</div>}
      {[...prevPages, ...nextPages]?.map(p => (
        <Button key={p} p={p} {...props} />
      ))}
      {!!lastPages.length && <div className={styles.dots}>...</div>}
      {lastPages?.map(p => (
        <Button key={p} p={p} {...props} />
      ))}

      <button onClick={onClickNext} disabled={isFetching || isLoading}>
        {'>'}
      </button>
    </div>
  )
}

const Button = ({ p, currentPage, onPageChanged, setCurrentPage, isFetching }) => {
  return (
    <button
      disabled={isFetching}
      className={currentPage === p && styles.selectedPage}
      onClick={() => {
        onPageChanged(p)
        setCurrentPage(p)
      }}
    >
      {p}
    </button>
  )
}

export default Buttons
