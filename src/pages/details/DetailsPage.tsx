import { useLoaderData } from "react-router";
import type { DetailsLoaderResult } from './detailsLoader';
import { useState } from 'react';


export default function DetailsPage() {
  const { details } = useLoaderData() as DetailsLoaderResult
  //Add loading state
  const[imgLoaded, setImageLoaded] = useState(false);
  console.log(imgLoaded);

   const foodPairing = details.food_pairing.map((food, idx) => {
    return <div key={idx} className="bg-slate-300 align-center py-1 px-1 place-content-center rounded text-center">{food}</div>
   })

  return (
    <div className="flex flex-col md:flex-row gap-6 border-2 border-slate-200 bg-slate-100 py-3 px-3 mt-4 rounded shadow-lg">
      <div className="w-full md:w-1/2 border-slate-200 border-2 p-4 rounded-2xl shadow">
        <div className="font-bold">{details.name}</div>
        <div>{details.tagline}</div>
        <div className="flex justify-center mt-2">
          {
            !imgLoaded && (
              <div className ="w-[50] h-[200] animate-pulse bg-gray-200"/>
            )}
        <img 
        style ={{ width: 50, height: 200 }} 
        src={`https://punkapi-alxiw.amvera.io/v3/images/${details.image}`}
        onLoad={() => setImageLoaded(true)}
        alt={details.name}></img>
        </div>
        <div className="pt-3">{details.description}</div>
      </div>

      <div className="flex flex-col items-center w-full md:w-2/5 md:pl-3  border-slate-200 border-2 p-4 rounded-2xl shadow ">
            <h4 className="font-bold pb-3 text-center">Food Pairing</h4>
            <div className="flex flex-wrap gap-3 justify-center w-4/5 items-center">
              {foodPairing}
            </div>
          </div>
        
      </div>
  )
}
