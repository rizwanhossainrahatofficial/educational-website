import { Button } from 'bootstrap';
import React from 'react';
import { Card, CardGroup, Col, ListGroup, ListGroupItem, Row } from 'react-bootstrap';

const SubDetail = (props) => {
    console.log(props.sb.subject)
    const {subject,img}=props.sb
    return (
        <div >
  
      <h2>sub  details</h2>
        </div>
    );
};

export default SubDetail;