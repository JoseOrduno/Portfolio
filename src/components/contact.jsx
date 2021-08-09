import React from 'react';
import { Row, Card } from 'react-bootstrap';

function About() {
  return (
    <Row id="contact" className="h-100 w-100">
      <div className="flex container-screen h-100 w-100">
        <Card>
          <Card.Body>
            hello this is a body
          </Card.Body>
        </Card>
      </div>
    </Row>
  );
}

export default About;
