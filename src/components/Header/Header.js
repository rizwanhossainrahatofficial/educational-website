import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import img from '../../images/h.png'

const Header = () => {
    return (
        <div>
            <img style={{width:'100%',height:'220px'}}  src={img} alt="" />

            <Navbar bg="dark" variant="dark">
    <Container>
   
    <Nav className="me-auto">
      <Nav.Link href="/home">Home</Nav.Link>
      <Nav.Link href="/about">About Us</Nav.Link>
      <Nav.Link href="/services">Services</Nav.Link>
      <Nav.Link href="/contract">Contract us</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
        </div>
    );
};

export default Header;