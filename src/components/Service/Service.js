import React, { useContext, useEffect, useState } from 'react';
import { Button, Card, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { subContext } from '../Home/Home';
import Fakedata from '../../FakeData/FakeData.json'
import SubDetail from '../SubDetail/SubDetail';
import data from '../data/db.json'

const Service = (props) => {
 
const sub=useContext(subContext)
console.log(props)
// const [sub,setsub]=useState()
const{id}=useParams()
console.log(id)
useEffect(()=>{
fetch(`http://localhost:3000/services/${id}`)
.then(res=>res.json())
.then(data=>console.log(data))
},[])
    return (
        <div>

          <h2>service:{id}</h2>

        </div>
    );
};

export default Service;