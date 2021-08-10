import React from 'react';

const ExperienceCard = (data) => {
  const {
    data: {
      job, period, enterprise, activities,
    },
  } = data;
  return (
    <div className="cards-portfolio  flex-column justify-content-center align-items-center">
      <h2 style={{ textAlign: 'left' }}>
        {job}
        <span style={{ float: 'right' }}>{period}</span>

      </h2>
      <h2 style={{ color: 'red' }}>
        {enterprise}
      </h2>
      <text>
        {activities}
      </text>
    </div>
  );
};

export default ExperienceCard;
