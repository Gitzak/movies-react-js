import React from "react";
import { Card, Col } from "react-bootstrap";
import { FaStar } from "react-icons/fa";
import "./Movie.css";

function Movie({ title, year, poster, type }) {
    const randomStar = () => {
        return Math.floor(Math.random() * 9) + 1;
    }
  return (
    <Col md={4} className="mb-4">
      <Card className="movie-card" style={{ height: '48em' }}>
        <Card.Img variant="top" src={poster} alt={title} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>Year: {year}</Card.Text>
          <Card.Text>Type: {type}</Card.Text>
          <Card.Text>
            <FaStar /> {randomStar()}
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default Movie;
