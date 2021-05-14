import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'

import 'bootstrap/dist/css/bootstrap.min.css';

export default function LinkedInNavbar() {
    return (
        <div>
            {/* <nav>
                <ul>
                    <li>
                       Linkedin
                    </li>
                    <li>
                    <input type="search" name="" id="" />
                    </li>
                    <li>Home</li>
                    <li>My Network</li>
                    <li>Jobs</li>
                    <li>Messaging</li>
                    <li>Notification</li>
                    <li>Me</li>
                    <li>Work</li>
                    <li>Try Premium</li>
                </ul>
            </nav> */}


            <Navbar bg="light" expand="lg">
  <Navbar.Brand href="#home">Linkedin</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
    <Form inline d-flex>
      <FormControl type="text" placeholder="Search"  />
      {/* <Button variant="outline-success">Search</Button> */}
    </Form>
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#link">My Network</Nav.Link>

      <Nav.Link href="#link">Jobs</Nav.Link>
      <Nav.Link href="#link">Messaging</Nav.Link>
      <Nav.Link href="#link">Notifications</Nav.Link>
      <Nav.Link href="#link">Me</Nav.Link>

      <Nav.Link href="#link">Work</Nav.Link>
      <NavDropdown title="Dropdown" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    
  </Navbar.Collapse>
</Navbar>
        </div>
    )
}
