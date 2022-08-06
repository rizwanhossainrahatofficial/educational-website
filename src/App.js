import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Aboutus from './components/Aboutus/Aboutus';
import Contract from './components/Contract/Contract';
import Service from './components/Service/Service';
import Footer from './components/Footer/Footer';
import NotFound from './components/NotFound/NotFound';
import { useEffect, useState } from 'react';

function App() {
  const [subject,setsubject]=useState([])
    
    
        useEffect(()=>{
            fetch('http://localhost:3000/subjects')
            .then(res=>res.json())
            .then(data=>console.log(data))
            },[])
    
  return (
    <div className="App">
      {/* <BrowserRouter>
      <Header></Header>
      
      <Routes>
        <Route path="/home" element={<Home/>} />
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<Aboutus />} />
        <Route path="/contract" element={<Contract />} />
        <Route path="/services" element={<Service />} />
        <Route  path="/services/:Id" element={<Service />} />
        <Route path="*" element={<NotFound />} />
      
      </Routes>
      <Footer></Footer>
      </BrowserRouter> */}
     
    </div>
  );
}

export default App;
