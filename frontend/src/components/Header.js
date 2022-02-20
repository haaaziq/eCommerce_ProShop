import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap';
// To overlap React Bootstrap components with links
// we'll use Link Container from react-router-bootstrap
import {LinkContainer} from 'react-router-bootstrap';

const Header = () => {
  return (
    <header>
        <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect className='py-2'>
            <Container>
                <LinkContainer to='/'>
                    <Navbar.Brand>ProShop</Navbar.Brand>
                </LinkContainer>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                    <LinkContainer to='/cart'>
                        <Nav.Link><i className="fa-solid fa-cart-shopping"></i> Cart</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to='/login'>
                        <Nav.Link><i className="fa-solid fa-user"></i> Signin</Nav.Link>
                    </LinkContainer>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </header>
  )
}

export default Header;