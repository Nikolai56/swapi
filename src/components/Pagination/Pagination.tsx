import React, { Dispatch, SetStateAction } from 'react'
import Pagination from 'react-bootstrap/Pagination'

interface Props {
  count?: number
  onPageChange: Dispatch<SetStateAction<number>>
  page: number
}

const PaginationComponent: React.FC<Props> = (
  { count, onPageChange, page }
) => {
  if (!count) return null
  const pages = Math.ceil(count / 10)
  const pagesArr = Array.from({length: pages}, (_, i) => i + 1)

  return (
    <Pagination className="justify-content-center mt-3">
      <Pagination.First onClick={() => onPageChange(1)} />
      <Pagination.Prev onClick={
        () => onPageChange(page > 2 ? page - 1 : 1)
      }/>
      {pagesArr.map(el => (
        <Pagination.Item
          key={el}
          active={el === page}
          onClick={() => onPageChange(el)}
        >
          {el}
        </Pagination.Item>
      ))}
      <Pagination.Next onClick={
        () => onPageChange(page < pages ? page + 1 : pages)
      } />
      <Pagination.Last onClick={() => onPageChange(pages)} />
    </Pagination>
  )
}

export default PaginationComponent
