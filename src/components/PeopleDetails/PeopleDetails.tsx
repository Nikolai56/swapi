import React, { ChangeEvent, FormEvent, useState} from 'react'
import {Link} from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import classes from './PeopleDetails.module.scss'
// types
import { Person } from 'types'

enum ViewState {
  Read,
  Edit,
}

const FieldSet = [
  'name',
  'gender',
  'eye_color',
  'hair_color',
  'skin_color',
  'mass',
  'height',
]

interface Props {
  person: Person
}

const PeopleDetails: React.FC<Props> = ({ person }) => {
  const [pState, setPersonState] = useState<Person>(person)
  const [mode, setMode] = useState<ViewState>(ViewState.Read)
  if (!person) return null

  const handleModeChange = () => {
    if (mode === ViewState.Read) {
      setMode(ViewState.Edit)
    } else {
      setMode(ViewState.Read)
    }
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setMode(ViewState.Read)
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const field = e.target.dataset.field!
    const value = e.target.value
    setPersonState({ ...pState, [field]: value })
  }

  return (
    <div className={classes.container}>
      <Link to="/" className="d-block mb-4">Back Home</Link>
      <Button variant="info" onClick={handleModeChange} className="mb-3">
        {mode === ViewState.Read ? 'Edit' : 'View'}
      </Button>
      <Row>
        <Col xs={12}>
          {mode === ViewState.Read ? (
            <Card className="mb-2" bg="light">
              <Card.Body>
                <Card.Title>{pState.name}</Card.Title>
                {FieldSet.map(field => (
                  <Card.Text key={field}>{field}: {pState[field]}</Card.Text>
                ))}
              </Card.Body>
            </Card>
          ) : (
            <Form onSubmit={handleSubmit}>
              {FieldSet.map(field => (
                <Form.Group className="mb-3" key={field}>
                  <Form.Label>{field}</Form.Label>
                  <Form.Control
                    value={pState[field]}
                    onChange={handleChange}
                    data-field={field}
                    type="text"
                    placeholder={`Enter ${field}`}
                  />
                </Form.Group>
              ))}
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          )}
        </Col>
      </Row>
    </div>
  )
}

export default PeopleDetails
