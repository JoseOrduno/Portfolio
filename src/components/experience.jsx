import React from 'react';
import { Row } from 'react-bootstrap';
import ExperienceCard from './experiencecard';
import constants from '../constants/experience';
import './experience.css';

const Experience = () => (
  <Row id="experience" className="section-screen">
    <div className="d-flex h-25 flex-column justify-content-center align-items-center ">
      <h1 className="display-4">
        Experience
      </h1>
    </div>
    <div className="d-flex h-75 cards-portfolio  flex-column justify-content-flex-start align-items-flex-start">
      <ExperienceCard data={constants.job1} />
      <ExperienceCard data={constants.job2} />
      <ExperienceCard data={constants.job3} />
    </div>
  </Row>
);

export default Experience;
