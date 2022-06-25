import React from 'react';
import './Layout2.css';
import { Row, Container, Button, Nav, Col} from 'react-bootstrap';

const Layout2 = () => {
    return (
        <Container className="layout1">
            <Nav className="mx-auto">
                <Nav.Link href="layout1"><Button variant="outline-secondary" size="sm">Layout 1</Button>{' '}</Nav.Link>
                <Nav.Link href="layout2"><Button variant="secondary" size="sm" className="active">Layout 2</Button>{' '}</Nav.Link>
                <Nav.Link href="layout3"><Button variant="outline-secondary" size="sm">Layout 3</Button>{' '}</Nav.Link>
            </Nav>
                <Container fluid className="mt-2  pt-2">
                    <Row className="p-1 text-white">
                        <Col className="p-5 m-2 second-card "><small>Card1</small></Col>
                        <Col className="p-5 m-2 second-card "><small>Card2</small></Col>
                        <Col className="p-5 m-2 second-card "><small>Card3</small></Col>
                    </Row>
                    <Row className="p-1 text-white">
                        <Col className="p-5 m-2 second-card"><small>Card4</small></Col>
                        <Col className="p-5 m-2 second-card"><small>Card5</small></Col>
                        <Col className="p-5 m-2"><small></small></Col>
                    </Row>
                </Container>
        </Container>
        
    );
};

export default Layout2;

