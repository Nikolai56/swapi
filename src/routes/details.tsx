import React from 'react'
import { LoaderFunctionArgs, useLoaderData } from 'react-router-dom'
import PeopleDetails from 'components/PeopleDetails/PeopleDetails'
// types
import { Person } from 'types'

export const PersonLoader = async ({ params: { id } }:LoaderFunctionArgs) => {
  const response = await fetch(`https://swapi.dev/api/people/${id}/`)
  return await response.json() as Person
}

function Details() {
  const person = useLoaderData() as Person

  return (
    <>
      <PeopleDetails person={person}/>
    </>
  )
}

export default Details
