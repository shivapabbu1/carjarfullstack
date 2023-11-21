
import React from 'react';
import FirstSection from './Components/FirstSection';


import "./App.css";

import Dentist from './Components/Dentist';
import Gynoclogist from './Components/Gynoclogist';
import Nutrirtion from './Components/Nutrirtion';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
 

 
const App = () => {

  return (
  <section>
    <BrowserRouter>
  
    <Routes>
      <Route path="/" element={<FirstSection/>}/>
      <Route path="/dental" element={<Dentist/>}/>
      <Route path="/gynco" element={<Gynoclogist/>}/>
      <Route path="/nutro" element={<Nutrirtion/>}/>
     </Routes>
      </BrowserRouter>

   
    </section>
  );
};

export default App;
