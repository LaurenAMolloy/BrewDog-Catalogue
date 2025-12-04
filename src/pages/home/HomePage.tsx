import type { HomeLoaderResult } from "./homeLoader";
import { useLoaderData } from "react-router";

export default function HomePage() {
  const { featuredBrews } = useLoaderData() as HomeLoaderResult;
  console.log(featuredBrews)

  const renderedBrews = featuredBrews.map((b) => {
    return <div key={b.name} className="flex flex-col justify-between gap-3 border rounded shadow p-4">
        <div className="flex flex-col gap-1 border-bottom border-grey-400">
          <div className="font-bold text-center">{b.name}</div>
          <div className="text-sm text-gray-500">{b.tagline}</div>
          <div className="text-sm font-bold text-gray-700">{b.abv}% ABV</div>
        </div>
    </div>
  })
  return (
  <>
    <div className="container py-12 space-y-8">
    <h1 className='tex-6xl font-bold'>The BrewDog Catalogue</h1>
    <p>Search and view your favourite brews.</p>
    </div>
    <div className="mx-auto grid grid-cols-4 max-w-[900px] items-stretch gap-4">{renderedBrews}</div>
  </>
  )
}
