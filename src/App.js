
import './App.css';
import React from 'react'
import {Route,Routes } from 'react-router-dom'
import Navbar from './components/Navbar';
import { routes } from './common/routes';
// import { useState, useEffect } from 'react';

function App() {

  // const [data, setData] = useState(null);
  // useEffect(() => {
  //   fetch("https://api.publicapis.org/entries")
  //     .then(response => response.json())
  //     .then(json => setData(json))
  //     .catch(error => console.error(error));
  // }, []);

  return (

    <div className="container">
        <Navbar/>
        <Routes>
          {routes.map((item,index)=>(
          <Route path={item.pathname} element={item.component} key={index} />
          ))}
        </Routes>
    </div>




  );
}

export default App;
