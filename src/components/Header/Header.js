import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Header = () => {
    return (
        <div>
            <Navbar bg="primary" variant="dark">
                <Container>
                <Navbar.Brand href="/">Home</Navbar.Brand>
                    <Nav className="my-auto">
                        <Nav.Link href="layout1">Layout 1</Nav.Link>
                        <Nav.Link href="layout2">Layout 2</Nav.Link>
                        <Nav.Link href="layout3">Layout 3</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;