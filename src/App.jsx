import React from 'react'
import { Route,Routes } from 'react-router-dom';
import Details from './Details';
import "./index.css";
import Meal from './Meal';
import Navbar from './Navbar';
const App = () => {
  return (
    <div className="container mx-auto">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Meal />} />
        <Route path="/detail/:id" element={<Details />} />
      </Routes>
    </div>
  );
}

export default App