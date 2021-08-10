import React from 'react';
import { Row } from 'react-bootstrap';
import TextCard from './textcard';
import constants from '../constants/about';

const About = () => (
  <Row id="about" className="section-screen">
    <div className="flex  align-items-center container-screen justify-content-center">
      <TextCard constants={constants} />
    </div>
  </Row>
);

export default About;
