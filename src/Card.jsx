import React from 'react'
import { Link } from 'react-router-dom';

const Card = ({meal}) => {
  return (
    <div className="w-60 border-2 flex flex-col justify-center items-center rounded-lg p-8 gap-3 relative h-[400px] hover:shadow-lg hover:scale-105 transition duration-500">
      <img src={meal.strMealThumb} className="w-52 rounded-lg" alt="" />
      <h1 className="font-semibold text-center">{meal.strMeal}</h1>
      <button className="px-8 py-2  rounded-full text-white bg-orange-600 absolute bottom-6 ">
        <Link to={`/detail/${meal.idMeal}`}>Details</Link>
      </button>
    </div>
  );
}

export default Card