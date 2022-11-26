import React from "react";
import { Card } from "react-bootstrap";

const Activity = (props) => {
  return (
    <div>
      <Card className="text-center">
        <Card.Img variant="top" src={props.image} />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>{props.desc}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Activity;
