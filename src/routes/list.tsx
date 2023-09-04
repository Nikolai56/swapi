import React, { useEffect, useRef, useState } from 'react'
import Form from 'react-bootstrap/Form'
import Pagination from 'components/Pagination/Pagination'
import PeopleList from 'components/PeopleList/PeopleList'
import useDebounce from 'hooks/useDebounce'
import { People } from 'types'

function List() {
  const [people, setPeople] = useState<People | null>(null)
  const [page, setPage] = useState(1)
  const [search, setSearch] = useState<string>('')
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const debouncedSearch = useDebounce(search, 1000)
  const prevSearch = useRef(debouncedSearch)

  useEffect(() => {
    setPage(1)
  }, [debouncedSearch])

  useEffect(() => {
    if(prevSearch.current !== debouncedSearch && page !== 1) {
      return
    }
    const abortController = new AbortController()
    const { signal } = abortController

    const fetchData = async (path: string) => {
      try {
        setIsLoading(true)
        const request = await fetch(path, {
          signal: signal,
          method: 'GET',
        })
        const data = await request.json()
        setPeople(data)
      } catch (e) {
        if (!signal?.aborted) {
          console.error(e)
        }
      }
    }

    fetchData(`https://swapi.dev/api/people?page=${page}&search=${debouncedSearch}`)
      .then(() => {
        setIsLoading(false)
      })

    prevSearch.current = debouncedSearch

    return () => {
      abortController.abort()
    }
  }, [debouncedSearch, page, setPeople])

  return (
    <>
      <Form onSubmit={e => {e.preventDefault()}} className="mt-3">
        <Form.Group className="mb-3" controlId="controlInput1">
          <Form.Label>Search by keywords:</Form.Label>
          <Form.Control
            type="text"
            placeholder="anakin"
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
        </Form.Group>
      </Form>
      <PeopleList people={people} isLoading={isLoading} />
      <Pagination
        count={people?.count}
        page={page}
        onPageChange={setPage}
      />
    </>
  )
}

export default List
