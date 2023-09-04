import React from 'react'
import Row from 'react-bootstrap/Row'
import PeopleCard from 'components/PeopleCard/PeopleCard'
import classes from './PeopleList.module.scss'
// types
import { Person } from 'types'

interface Props {
  people: {
    count: number
    next: string | null
    previous: string | null
    results: Person[]
  } | null
}

const PeopleList: React.FC<Props> = ({ people }) => {
  if (!people) return null
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
