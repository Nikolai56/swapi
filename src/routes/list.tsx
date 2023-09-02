import React from 'react'
import { useOutletContext } from 'react-router-dom'
import PeopleList from 'components/PeopleList/PeopleList'
import { People } from 'types'

function List() {
  const people = useOutletContext() as People
  return (
    <div className="App">
      list:<br/>
      <PeopleList people={people}/>
    </div>
  )
}

export default List
