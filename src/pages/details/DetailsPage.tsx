import { useLoaderData } from "react-router"
import type { DetailsLoaderResult } from './detailsLoader'


export default function DetailsPage() {
  const { details } = useLoaderData() as DetailsLoaderResult
  console.log(details);

   const food_pairing = details.food_pairing.map((food, idx) => {
    return <div key={idx} className="bg-slate-300 py-1 px-2 rounded">{food}</div>
   })

  return (
    <div className="flex flex-col gap-2 border-2 border-slate-200 bg-slate-100 py-3 px-3 mt-4 rounded">
      <div className="font-bold">{details.name}</div>
      <div>{details.tagline}</div>
      <div className="flex justify-center mt-2">
      <img style ={{ width: 100, height: 300 }} src={`https://punkapi-alxiw.amvera.io/v3/images/${details.image}`}></img>
      </div>
      <div>{details.description}</div>
      <div>
        <h4 className="font-bold">Food Pairing</h4>
        <div className="flex gap-2 mt-2">
          {food_pairing}
        </div>
      </div>
    </div>
  )
}
