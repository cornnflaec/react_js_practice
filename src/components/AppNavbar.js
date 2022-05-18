import React from 'react'

// bootstrap components

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

// export default ~ allows the function to be used by the other files outside the file
export default function AppNavbar(){
    return(
        <Navbar bg='light' expand='lg'>
          <Navbar.Brand href="#home">Zuitt Booking</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                  <Nav.Link href="#home">Home</Nav.Link>
                  <Nav.Link href="#courses">Courses</Nav.Link>
              </Nav>
          </Navbar.Collapse>
        </Navbar>
      )
  }




