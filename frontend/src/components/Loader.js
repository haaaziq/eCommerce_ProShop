import React from 'react';
import {Spinner} from 'react-bootstrap';

const Loader = () => {
  return (
    <Spinner animation="grow" role="status" style={{margin:"auto",  display:"block", height:"80px", width:"80px"}}>
        <span className="visually-hidden">Loading...</span>
    </Spinner>
  )
}

export default Loader;