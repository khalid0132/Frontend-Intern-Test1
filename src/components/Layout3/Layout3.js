import React from 'react';
import './Layout3.css';
import { Row, Container, Button, Nav, Col} from 'react-bootstrap';

const Layout3 = () => {
    return (
        <Container className="layout1">
            <Nav className="mx-auto">
                <Nav.Link href="layout1"><Button variant="outline-secondary" size="sm">Layout 1</Button>{' '}</Nav.Link>
                <Nav.Link href="layout2"><Button variant="outline-secondary" size="sm">Layout 2</Button>{' '}</Nav.Link>
                <Nav.Link href="layout3"><Button variant="secondary" size="sm" className="active">Layout 3</Button>{' '}</Nav.Link>
            </Nav>
                <Container fluid className="mt-4  px-4">
                    <Row className="second-card p-1 mb-3 text-white">
                        <Col className="p-2"><smallest>Card1</smallest></Col>
                    </Row>
                    <Row className="text-white mb-3">
                        <Col md="2" className="p-1 m-1 second-card"><small>Card2</small></Col>
                        <Col className="p-5 m-1 second-card"><small>Card3</small></Col>
                        <Col md="2" className="p-1 m-1 second-card"><small>Card4</small></Col>
                    </Row>
                    <Row className="second-card p-1 text-white">
                        <Col className="p-2"><small>Card5</small></Col>
                    </Row>
                </Container>
        </Container>
    );
};

export default Layout3;