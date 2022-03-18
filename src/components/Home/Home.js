import React, { createContext, useEffect, useState } from 'react';
import { Container, Nav, Navbar, NavDropdown, Row } from 'react-bootstrap';
import FakeData from '../../FakeData/FakeData.json'
import Subject from '../Subject/Subject';

export const subContext= createContext(FakeData)


const Home = () => {
    const [subject,setsubject]=useState([])
    
    useEffect(()=>{
        setsubject(FakeData)
    
    },[])

    return (
       <subContext.Provider  >
        <div >      

                      <Row  xs={1} md={3}  className="g-4">
                       
          {
              subject.map(sub=><Subject sub={sub} key={sub.id}></Subject>)
          }
          
          </Row>
        </div>
        </subContext.Provider>
    );
};

export default Home;