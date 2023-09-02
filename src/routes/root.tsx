import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import Container from 'react-bootstrap/Container'

// import { People } from 'types'

/*export const PeopleLoader = async () => {
  const response = await fetch('https://swapi.dev/api/people')
  return await response.json() as People
}*/

function Root() {
  const [people, setPeople] = useState(null)
  // const people = useLoaderData() as People
  // console.log(people)
  useEffect(() => {
    const fetchData = async () => {
      const url = 'https://swapi.dev/api/people'
      const response = await fetch(url)
      const data = await response.json()
      setPeople(data)
    }

    fetchData().then()
  }, [])
  return (
    <div className="App">
      <Container>
        Layout: <br/><br/>
        <Outlet context={people}/>
      </Container>
    </div>
  )
}

export default Root
