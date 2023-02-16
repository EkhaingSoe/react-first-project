import React from 'react'
import { GiMeal } from "react-icons/gi";
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <Link to={`./`}>
      <div className="flex items-center gap-2 my-4">
        <GiMeal className="text-3xl text-orange-400" />
        <p className="font-bold text-orange-900">Foodie</p>
      </div>
    </Link>
  );
}

export default Navbar