import React from 'react';
import { Card } from 'react-bootstrap';
import './textcard.css';

const textCard = (data) => {
  console.log(data);
  console.log(data.constants);
  return (
    <Card>
      <Card.Body>
        <Card.Title className="h-50">
          <h1 className="mb-0">
            {data.constants.header}
            &nbsp;
            <span className="text-primary">{data.constants.header2}</span>
          </h1>
        </Card.Title>
        <Card.Text>
          {data.constants.body}
        </Card.Text>

      </Card.Body>
    </Card>

  );
};

export default textCard;
