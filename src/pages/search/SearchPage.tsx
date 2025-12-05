import { useLoaderData } from "react-router"
import type  { SearchLoaderResult } from './searchLoader'
import BrewCardItem from '../../components/BrewCardItem'

export default function SearchPage() {
  const { searchResults } = useLoaderData() as SearchLoaderResult;
  console.log(searchResults);

  //map over results from the api and display brewcard for each
  const renderedResults = searchResults.map((result) => {
    return <BrewCardItem brew={result} key={result.name} />
  })
  
  return (
    <>
    <div>
      <h1 className="text-2xl font-bold my-6">Search Results</h1>
      <div className="flex flex-col gap-2">{renderedResults}</div>
    </div>
    </>
  )
}
