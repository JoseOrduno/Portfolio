import React from 'react';
import { Row } from 'react-bootstrap';
import education from '../constants/education';
import ExperienceCard from './experiencecard';

const Education = () => {
  console.log(education.education1);
  return (
    <Row id="education" className="section-screen">
      <div className="d-flex h-25 flex-column justify-content-center align-items-center ">
        <h1 className="display-4">
          Education
        </h1>
      </div>
      <div className="d-flex h-75 cards-portfolio  flex-column justify-content-flex-start align-items-flex-start">
        <ExperienceCard data={education.education3} />
        <ExperienceCard data={education.education2} />
        <ExperienceCard data={education.education1} />
      </div>

    </Row>

  );
};

export default Education;
