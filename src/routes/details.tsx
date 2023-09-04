import React from 'react'
import { Link, LoaderFunctionArgs, useLoaderData } from 'react-router-dom'
import { Person } from 'types'

export const PersonLoader = async ({ params: { id } }:LoaderFunctionArgs) => {
  console.log('PersonLoader', id)
  const response = await fetch(`https://swapi.dev/api/people/${id}/`)
  return await response.json() as Person
}

function Details() {
  const person = useLoaderData() as Person
  console.log('person', person)
  // const [people, setPeople] = useState(null)
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const url = 'https://swapi.dev/api/people'
  //     const response = await fetch(url)
  //     const data = await response.json()
  //     setPeople(data)
  //   }

  // fetchData()
  // }, [])
  return (
    <>
      <Link to="/">Back Home</Link>
      {person.name}
    </>
  )
}

export default Details
