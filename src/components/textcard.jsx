import React from 'react';
import { Card } from 'react-bootstrap';
import './textcard.css';

const textCard = (data) => (
  <Card>
    <Card.Body>
      <Card.Title>
        <h1 className="display-3">
          {data.constants.header}
          &nbsp;
          <span style={{ color: 'red' }}>{data.constants.header2}</span>
        </h1>
      </Card.Title>
      <Card.Subtitle>
        <h2>
          <u style={{ color: 'brown' }}>
            {data.constants.subtitle}
          </u>
        </h2>
      </Card.Subtitle>
      <Card.Text className="text-body-card">
        {data.constants.body}
      </Card.Text>
    </Card.Body>
  </Card>
);

export default textCard;
