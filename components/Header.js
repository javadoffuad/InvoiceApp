import React from 'react';
import { render } from 'react-dom';
import { Navbar } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { NavItem } from 'react-bootstrap';

const Header = () => (
  <Navbar>
    <Navbar.Header>
      <Navbar.Brand>
        <a href="#">Invoice App</a>
      </Navbar.Brand>
    </Navbar.Header>
    <Nav>
      <NavItem eventKey={1} href="#">Invoices</NavItem>
      <NavItem eventKey={2} href="#">Products</NavItem>
      <NavItem eventKey={3} href="#">Customers</NavItem>
    </Nav>
  </Navbar>
);

//ReactDOM.render(navbarInstance, mountNode);
module.exports = Header;