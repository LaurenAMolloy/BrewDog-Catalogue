import type { HomeLoaderResult } from "./homeLoader";
import { useLoaderData } from "react-router";
import { Link } from 'react-router'

export default function HomePage() {
  const { featuredBrews } = useLoaderData() as HomeLoaderResult;
  console.log(featuredBrews)

  const renderedBrews = featuredBrews.map((b) => {
    return <div key={b.name} className="flex flex-col justify-between gap-2 rounded shadow p-4 bg-gray-200">
        <div className="flex items-stretch flex-col justify-evenly gap-1 h-full">
          <div className="font-bold text-center">{b.name}</div>
          <div className="text-sm text-gray-500">{b.tagline}</div>
          <div className="text-sm font-bold text-gray-700 bg-white py-1 px-1 rounded mt-auto">{b.abv}% ABV</div>
        </div>
        <Link to={`/details/${b.id}`} className="border rounded bg-black text-center text-white">View Details</Link>
    </div>
  })
  return (
  <>
    <div className="container py-12 space-y-8">
    <h1 className='text-4xl font-bold'>The BrewDog Catalogue</h1>
    <p>Search and view your favourite brews.</p>
    </div>
    <div className="mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-[900px] items-stretch gap-4">{renderedBrews}</div>
  </>
  )
}
