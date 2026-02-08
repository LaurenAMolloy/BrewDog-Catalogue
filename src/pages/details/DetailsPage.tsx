import { useLoaderData } from "react-router";
import type { DetailsLoaderResult } from './detailsLoader';
import { Link } from 'react-router-dom';
import ImageWithSkeleton from '../../components/ImageWithSkeleton'


export default function DetailsPage() {
  const { details } = useLoaderData() as DetailsLoaderResult

   const foodPairing = details.food_pairing.map((food, idx) => {
    return <div key={idx} className="bg-slate-300 align-center py-2 px-2 place-content-center rounded text-center">{food}</div>
   })

  return (
    <>
    <div className="flex min-h-screen items-center justify-center">
    <div className="flex flex-col md:flex-row md:items-stretch gap-6 w-full max-w-5xl px-4">
      <div className="w-full md:w-1/2 border-slate-200 border-2 p-4 rounded-2xl shadow">
        <div className="font-bold">{details.name}</div>
        <div>{details.tagline}</div>
        <div className="flex justify-center mt-2">
          <ImageWithSkeleton
          src={`https://punkapi-alxiw.amvera.io/v3/images/${details.image}`}
          alt={details.name}
          width={50}
          height={50}
        /> 
        </div>
        <div className="pt-3">{details.description}</div>
      </div>
      <div className="flex flex-col w-full md:w-2/5 border-slate-200 border-2 p-4 rounded-2xl shadow">
            <h4 className="font-bold pb-3 text-center">Food Pairing</h4>
            <div className="flex flex-1 flex-wrap justify-center gap-3">
              {foodPairing}
            </div>
            <Link to="/" className="mx-auto p-3 inline-flex rounded-full bg-cyan-900 text-center text-white hover:bg-sky-200 hover:text-slate-900 mt-5">Try Another Search</Link>
      </div>
      </div>
    </div>
    </>
  )
}
