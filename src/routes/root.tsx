import React from 'react'
import { Outlet } from 'react-router-dom'
import Container from 'react-bootstrap/Container'

function Root() {
  return (
    <div className="App">
      <Container>
        <Outlet/>
      </Container>
    </div>
  )
}

export default Root
