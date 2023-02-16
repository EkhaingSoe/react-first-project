import axios from 'axios';
import React, { useEffect, useState } from 'react'
import {AiFillYoutube} from "react-icons/ai"
import { useParams } from 'react-router-dom'
import Loading from './Loading';

const Details = () => {
  const { id } = useParams();
  const [meal, setMeal] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const getSingleMeal = async () => {
    const { data } = await axios.get(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
    );
    console.log(data.meals[0]);
    setMeal(data?.meals[0]);
    setIsLoading(false);
  }
  useEffect(() => {
    getSingleMeal();
   }, []);
  return isLoading ? (
    <Loading />
  ) : (
    <div className="flex gap-4 flex-col ">
      <img src={meal.strMealThumb} className="w-72 rounded-xl" alt="" />
      <div className="bg-orange-500 w-24 text-sm text-white text-center rounded-full">
        {meal.strCategory}
      </div>
      <h1 className="font-bold text-xl">{meal.strMeal}</h1>
      <div>
        <h1 className="font-semibold text-lg">Instruction</h1>
        <div className="text-sm text-gray-500 tracking-wider leading-6">
          {meal.strInstructions}
        </div>
      </div>
      <div className="flex gap-2 items-center">
        <a href={meal.strYoutube}>
          <AiFillYoutube className="text-red-500 text-4xl " />
        </a>
        <h1 className="font-semibold">Watch here</h1>
      </div>
    </div>
  );
}

export default Details