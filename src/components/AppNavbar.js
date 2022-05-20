import React, {Fragment} from 'react'
import {Link, NavLink} from 'react-router-dom'

// bootstrap components

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

// export default ~ allows the function to be used by the other files outside the file
export default function AppNavbar( {user} ){
    
    let rightNav = (user === null) ? (
        <Fragment>
            <Nav.Link as={NavLink} to='/register'>Register</Nav.Link>
            <Nav.Link as={NavLink} to='/login'>Login</Nav.Link>
        </Fragment>
    ) : (
        <Fragment>
            <Nav.Link as={NavLink} to='/logout'>Logout</Nav.Link>
        
        </Fragment>
    )

    return(
        <Navbar bg='light' expand='lg'>
          <Navbar.Brand as={Link} to='/'>Zuitt Booking</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                  <Nav.Link as={NavLink} to='/'>Home</Nav.Link>
                  <Nav.Link as={NavLink} to='/courses'>Courses</Nav.Link>
              </Nav>
              <Nav className = "ml-auto">
                  {rightNav}
              </Nav>
          </Navbar.Collapse>
        </Navbar>
      )
  }




