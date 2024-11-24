import React from 'react';
import Card from 'react-bootstrap/Card';

const BlogCard = ({ image, title, date, description }) => {
  return (
    <Card className="shadow-sm h-100 border-0">
      <Card.Img
        variant="top"
        src={image}
        alt={`Image for ${title}`}
        className="img-fluid"
        onError={(e) => {
          e.target.src = 'https://source.unsplash.com/800x600/?fashion';
        }}
      />
      <Card.Body>
        <Card.Text className="text-muted small mb-2">{date}</Card.Text>
        <Card.Title className="fs-5 fw-bold text-dark">{title}</Card.Title>
        <Card.Text className="text-secondary">{description}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default BlogCard;
