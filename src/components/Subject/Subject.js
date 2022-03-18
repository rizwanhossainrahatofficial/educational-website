import { Button } from 'bootstrap';
import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Subject = (props) => {
  
  const {subject,img,id}=props.sub
  
const navigate=useNavigate()

  const handleOnClick=()=>{
    navigate(`/services/${id}`)

  }

    return (
        <div>
  
    <Col>
      <Card>
        <Card.Img style={{width:'100%'}} variant="top" src={img} />
        <Card.Body>
          <Card.Title>{subject}</Card.Title>
          <Card.Text>
            This is a longer card with supporting text below as a natural
            lead-in to additional content. This content is a little bit longer.
            
          </Card.Text>
         
        </Card.Body>
      </Card>
    </Col>
 
        </div>
    );
};
<h4>this sub</h4>
export default Subject;