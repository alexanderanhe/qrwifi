import React from 'react'
import { Link } from 'react-router-dom'
import { Navbar, Button } from 'react-bootstrap'
import { FaPlus, FaWifi } from 'react-icons/fa';

export default function Navigation({ setImage }) {
  return (
    <Navbar>
      <Navbar.Brand>
        <Link to="/" style={{ color: 'inherit'}} onClick={() => { setImage(null) }}>
          <h2><FaWifi size={40}/> WiFi</h2>
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end">
        <Link to="/new" style={{ color: 'inherit'}}>
          <Button variant="outline-info" style={{ border: 'none' }}><FaPlus/></Button>
        </Link>
        </Navbar.Collapse>
    </Navbar>
  )
}
