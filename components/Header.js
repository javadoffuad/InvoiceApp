import React from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router-dom';
import {
  IndexLinkContainer,
  LinkContainer
} from 'react-router-bootstrap'

import { Navbar } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { NavItem } from 'react-bootstrap';

const Header = () => (
  <Navbar>
    <Navbar.Header>
      <Navbar.Brand>
        <Link to="/">Invoice App</Link>
      </Navbar.Brand>
    </Navbar.Header>
    <Nav>
      <IndexLinkContainer to="/">
        <NavItem>Invoices</NavItem>
      </IndexLinkContainer>
      <LinkContainer to="/products">
        <NavItem>Products</NavItem>
      </LinkContainer>
      <LinkContainer to="/customers">
        <NavItem>Customers</NavItem>
      </LinkContainer>
    </Nav>
  </Navbar>
);

module.exports = Header;