import React from 'react';
import { Row } from 'react-bootstrap';
import TextCard from './textcard';
import constants from '../constants/about';

const Skills = () => (
  <Row id="about">
    <div className="flex container-screen align-items-center justify-content-center">
      <TextCard constants={constants} />
    </div>
  </Row>
);

export default Skills;
