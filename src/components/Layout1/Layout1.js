import React from 'react';
import { Row, Container, Col, Button, Nav} from 'react-bootstrap';
import './Layout1.css';

const Layout1 = () => {
    return (
        <Container className="layout1">
            <Nav className="mx-auto">
                <Nav.Link href="layout1"><Button variant="secondary" size="sm" className="active">Layout 1</Button>{' '}</Nav.Link>
                <Nav.Link href="layout2"><Button variant="outline-secondary" size="sm">Layout 2</Button>{' '}</Nav.Link>
                <Nav.Link href="layout3"><Button variant="outline-secondary" size="sm">Layout 3</Button>{' '}</Nav.Link>
            </Nav>
                <Container fluid className="mt-4  px-4">
                    <Row className="first-card p-2 text-white">
                        <Col className="p-2"><smallest>Card1</smallest></Col>
                    </Row>
                    <Row className="first-card p-2 text-white">
                        <Col className="p-2"><small>Card2</small></Col>
                    </Row>
                    <Row className="first-card p-2 text-white">
                        <Col className="p-2"><small>Card3</small></Col>
                    </Row>
                    <Row className="first-card p-2 text-white">
                        <Col className="p-2"><small>Card4</small></Col>
                    </Row>
                    <Row className="first-card p-2 text-white">
                        <Col className="p-2"><small>Card5</small></Col>
                    </Row>
                </Container>
        </Container>
    );
};
export default Layout1;