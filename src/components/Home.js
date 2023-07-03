

import React from 'react'
import { Container, Navbar } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Main from './Main';
import './css/Main.css'

function Home() {
  return (
    <div>
 <Navbar  bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#home">MERN TODO APP</Navbar.Brand>
</Container>
</Navbar>

<section className='bg_color'>
  <Main />
</section>

    </div>
  )
}

export default Home