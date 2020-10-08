import React from 'react';

import logoImg from '../../assets/logo.svg';

import { Col, Row, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';

export default function NavBar(){

  return (
    <Container fluid>
      
      <Row>
        <Col>
          <Navbar sticky="top"  >
            <Nav.Item>
              <h1>
                <img src={logoImg} alt="Micro"/>
                MicroCell
              </h1>
            </Nav.Item>

            <Nav className="mr-auto" >
              <Navbar.Brand />
              <Navbar.Brand />
              <Nav.Link href="/">Home</Nav.Link>
                  <NavDropdown title="Analises" id="basic-nav-dropdown">
                    <NavDropdown.Item href="/analise">Hematológica</NavDropdown.Item>
                    {/* <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item> */}
                  </NavDropdown>
              <Nav.Link href="/ajudar">Como ajudar</Nav.Link>
            </Nav>
          </Navbar>
        </Col>  
      </Row>

  </Container>
  )
};