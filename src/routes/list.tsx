import React from 'react'
import { useOutletContext } from 'react-router-dom'
import PeopleList from 'components/PeopleList/PeopleList'
import { People } from 'types'

/*export const PeopleLoader = async () => {
  const response = await fetch('https://swapi.dev/api/people')
  return await response.json() as People
}*/

function Root() {
  const people = useOutletContext() as People
  return (
    <div className="App">
      list:<br/>
      <PeopleList people={people}/>
    </div>
  )
}

export default Root
