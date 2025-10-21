import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Bootstracard(props) {
  const { src } = props;
  return (
    <Card className="p-3">
      <div className="img-content overflow-hidden p-0">
        <Card.Img
          variant="top"
          src={src}
          className="img-fluid animate-img w-100 h-100 object-fit-cover"
        />
      </div>
      <Card.Body className="px-0 pb-0">
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button className="btn btn-info">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}
