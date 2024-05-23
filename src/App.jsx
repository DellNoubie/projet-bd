import React, { useState } from 'react';
import EnregistrerE from  './EnregistrerE/EnregistrerE.jsx'
import { Courses } from './pages/courses'
import RequestM from './RequestM/RequestM.jsx';

const Home = () => {
  
  return (
    <>
      <RequestM/>
      <EnregistrerE/>
      <div className='container'>
        <Courses/>  
      </div>
    </>
  )
};

export default Home