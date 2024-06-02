// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Link, BrowserRouter, Routes } from 'react-router-dom';


import WeatherPage from './components/weatherPage';
import Home from './components/Home';
import Steps from './components/steps';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path='/Home' element={<Home/>}/>
        <Route path='/WeatherPage' element={<WeatherPage/>}/>
        <Route path='/Steps' element={<Steps/>}/>



      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
