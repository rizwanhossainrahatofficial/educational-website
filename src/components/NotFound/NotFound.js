import React from 'react';
import img from '../../images/404.png'

const NotFound = () => {
    return (
        <div style={{display:'flex',marginLeft:'250px',marginBottom:'100px'}}>
            <div style={{textAlign:'center'}}>
                <h1>Oops!</h1>
                <h5>The page you have looking for was not found.</h5>
            </div>
            <div>
            <img  src={img} alt="" />
            </div>
            
        </div>
    );
};

export default NotFound;