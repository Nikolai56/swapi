import React from 'react'
import { Link } from 'react-router-dom'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
// types
import { Person } from 'types'

interface Props {
  person: Person
}

const PeopleCard: React.FC<Props> = ({ person }) => {
  if (!person) return null
  const { url } = person
  const id = url.split('/')[5]

  return (
    <Col xs={12} sm={6}>
      <Card className="mb-2">
        <Card.Body>
          <Card.Title>{person.name}</Card.Title>
          <Card.Text>gender: {person.gender}</Card.Text>
          <Link to={`/people/${id}`}>link</Link>
        </Card.Body>
      </Card>
    </Col>
  )
}

export default PeopleCard
