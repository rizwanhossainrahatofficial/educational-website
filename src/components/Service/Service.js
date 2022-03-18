import React, { useContext, useEffect, useState } from 'react';
import { Button, Card, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { subContext } from '../Home/Home';
import Fakedata from '../../FakeData/FakeData.json'
import SubDetail from '../SubDetail/SubDetail';

const Service = () => {

   
 
const sub=useContext(subContext)



    return (
        <div>


   <Row xs={1} md={2} className="g-4">
           {
             sub.map(sb=><SubDetail sb={sb}></SubDetail>)
           }

</Row>

        </div>
    );
};

export default Service;