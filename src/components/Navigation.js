import React from 'react'
import { Link } from 'react-router-dom'
import { Navbar, Nav, Button } from 'react-bootstrap'
import { FaPlusSquare, FaWifi } from 'react-icons/fa';

export default function Navigation() {
  return (
    <Navbar fill bg="dark" variant="dark">
      <Navbar.Brand>
        <Link to="/" style={{ color: 'inherit'}}>
          <FaWifi/> WiFi
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end">
        <Nav.Link eventKey={2} href="#memes">
          <Link to="/new" style={{ color: 'inherit'}}>
            <Button variant="outline-info" style={{ border: 'none' }}><FaPlusSquare/></Button>
          </Link>
        </Nav.Link>
        </Navbar.Collapse>
    </Navbar>
  )
}
