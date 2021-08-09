import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import About from './about';
import Menu from './menu';
import 'bootstrap/dist/css/bootstrap.min.css';
import Portfolio from './portfolio';
import Contact from './contact';
import Education from './education';
import Skills from './skills';

const PrincipalScreen = () => (
  <Container fluid>
    <Row className="h-100">
      <Col className="h-100 pos-fixed col-md-2 col-12">
        <Menu />
      </Col>
      <Col className="h-100 offset-md-2 col-md-10 col-12">
        <About />
        <Education />
        <Skills />
        <Portfolio />
        <Contact />
      </Col>
    </Row>
  </Container>
);

export default PrincipalScreen;
