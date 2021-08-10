import React from 'react';
import { Nav, Row } from 'react-bootstrap';
import './menu.css';
import ProfilePhoto from './profilephoto';

const Menu = () => (
  <Row className="d-flex h-100 text-center justify-content-center bg-dark">
    <div className="flex h-100 ">
      <Nav
        defaultActiveKey="/about"
        activekey="/about"
        className="flex-column h-100 justify-content-center align-items-center"
      >
        <div style={{ marginBottom: '3%', height: 'auto' }}>
          <ProfilePhoto />
        </div>
        <Nav.Link eventKey="/about" href="/#about">About</Nav.Link>
        <Nav.Link eventKey="/experience" href="#experience">Experience</Nav.Link>
        <Nav.Link eventKey="/education" href="/#education">Education</Nav.Link>
        <Nav.Link eventKey="/skills" href="/#skills">Skills</Nav.Link>
        <Nav.Link eventKey="/portfolio" href="/#portfolio">Portfolio</Nav.Link>
        <Nav.Link eventKey="/contact" href="/#contact">Contact</Nav.Link>
      </Nav>
    </div>
  </Row>
);

export default Menu;
