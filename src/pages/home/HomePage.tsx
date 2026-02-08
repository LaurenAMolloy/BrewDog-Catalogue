import type { HomeLoaderResult } from "./homeLoader";
import { useLoaderData } from "react-router";
import { Link } from 'react-router'

export default function HomePage() {
  const { featuredBrews } = useLoaderData() as HomeLoaderResult;
  console.log(featuredBrews)

  const renderedBrews = featuredBrews.map((b) => {
    return <article key={b.name} className="flex flex-col justify-between gap-3 rounded shadow p-5 bg-gray-200">
        <div className="flex items-stretch flex-col justify-evenly gap-1 h-full">
          <div className="font-bold text-center">{b.name}</div>
          <div className="text-sm text-gray-500">{b.tagline}</div>
          <div className="text-sm font-bold text-gray-700 bg-white py-1 px-1 rounded mt-auto">{b.abv}% ABV</div>
        </div>
        <div className="flex justify-center">
        <Link to={`/details/${b.id}`} className="p-2 w-full rounded bg-cyan-900 text-center text-white hover:bg-sky-200 hover:text-slate-900">View Details</Link>
        </div>
    </article>
  })
  return (
    <>
    <div className="mx-auto max-w-[900px] px-4 py-12 space-y-8">
      <div className="space-y-2">
        <h1 className="text-4xl font-bold">The BrewDog Catalogue</h1>
        <p className="text-slate-600">Search and view your favourite brews.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {renderedBrews}
      </div>
    </div>
  </>
  )
}
