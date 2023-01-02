import React from 'react'
import Card from "react-bootstrap/Card";

const cardStyle = {
  margin:'24px 0'
}

function Section({ children, heading }) {
  return (
    <Card style={cardStyle}>
      <Card.Header>{heading}</Card.Header>
      <Card.Body>{children} </Card.Body>
    </Card>
  );
}

export default Section