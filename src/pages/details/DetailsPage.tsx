import { useLoaderData } from "react-router"
import type { DetailsLoaderResult } from './detailsLoader'


export default function DetailsPage() {
  const { details } = useLoaderData() as DetailsLoaderResult
  console.log(details);

   const foodPairing = details.food_pairing.map((food, idx) => {
    return <div key={idx} className="bg-slate-300 align-center py-1 px-1 place-content-center rounded text-center">{food}</div>
   })

  return (
    <div className="flex flex-col md:flex-row gap-2 border-2 border-slate-200 bg-slate-100 py-3 px-3 mt-4 rounded shadow-lg">
      <div className="w-full md:w-1/2">
        <div className="font-bold">{details.name}</div>
        <div>{details.tagline}</div>
        <div className="flex justify-center mt-2">
        <img style ={{ width: 50, height: 200 }} src={`https://punkapi-alxiw.amvera.io/v3/images/${details.image}`}></img>
        </div>
        <div className="pt-3">{details.description}</div>
      </div>

      <div className="w-full md:w-2/5 md:pl-3">
          <div>
            <h4 className="font-bold pb-3">Food Pairing</h4>
            <div className="grid grid-flow-col grid-rows-4 md:grid-rows-2 gap-4">
              {foodPairing}
            </div>
          </div>
        </div>
      </div>
  )
}
