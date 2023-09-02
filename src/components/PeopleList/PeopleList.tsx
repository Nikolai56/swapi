import React from 'react'
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
  console.log('people', people)
  if (!people) return null
  return (
    <div className={classes.container}>
      {people.results.map(person => (
        <PeopleCard key={person.name} person={person} />
      ))}
    </div>
  )
}

export default PeopleList
