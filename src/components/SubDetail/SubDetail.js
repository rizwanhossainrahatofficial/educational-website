import { Button } from 'bootstrap';
import React from 'react';
import { Card, CardGroup, Col, ListGroup, ListGroupItem, Row } from 'react-bootstrap';

const SubDetail = (props) => {
    console.log(props.sb.subject)
    const {subject,img}=props.sb
    return (
        <div >
  
  <CardGroup>
  <Card>
    <Card.Img variant="top" src={img} />
    <Card.Body>
      <Card.Title>{subject}</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  
</CardGroup>
        </div>
    );
};

export default SubDetail;