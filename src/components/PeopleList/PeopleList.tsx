import React from 'react'
import Row from 'react-bootstrap/Row'
import Spinner from 'react-bootstrap/Spinner'
import PeopleCard from 'components/PeopleCard/PeopleCard'
import classes from './PeopleList.module.scss'
// types
import { Person } from 'types'

interface Props {
  isLoading: boolean
  people: {
    count: number
    detail?: string
    next: string | null
    previous: string | null
    results: Person[]
  } | null
}

const PeopleList: React.FC<Props> = ({ isLoading, people }) => {
  if (people?.detail === 'Not found' || !people?.count) return <div>Nothing found</div>
  if (!people?.results || isLoading) return (
    <Spinner animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner>
  )
  return (
    <div className={classes.container}>
      <Row>
        {people.results.map(person => (
          <PeopleCard key={person.name} person={person} />
        ))}
      </Row>
    </div>
  )
}

export default PeopleList
