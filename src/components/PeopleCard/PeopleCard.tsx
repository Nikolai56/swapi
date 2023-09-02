import React from 'react'
import { Link } from 'react-router-dom'
import classes from './PeopleCard.module.scss'
// types
import { Person } from 'types'

interface Props {
  person: Person
}

const PeopleCard: React.FC<Props> = ({ person }) => {
  console.log(person)
  if (!person) return null
  const { url } = person
  const id = url.split('/')[5]

  return (
    <div className={classes.container}>
      <h3>{person.name}</h3>
      <Link to={`/people/${id}`}>link</Link>
      {/*{people}*/}
    </div>
  )
}

export default PeopleCard
