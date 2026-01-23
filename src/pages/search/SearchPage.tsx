import { useLoaderData } from "react-router";
import type  { SearchLoaderResult } from './searchLoader';
import BrewCardItem from '../../components/BrewCardItem';
import NoResultsPage from '../noResults/NoResultsPage';
import { Link } from 'react-router-dom';


export default function SearchPage() {
  const { searchResults, term } = useLoaderData() as SearchLoaderResult;
  console.log(searchResults);

  if(searchResults.length === 0 && term) {
    return <NoResultsPage term={term} />
}

  //map over results from the api and display brewcard for each
  const renderedResults = searchResults.map((result) => {
    return <BrewCardItem brew={result} key={result.name} />
  })
  
  return (
    <>
    <div className="flex flex-col gap-4 items-center">
      <h1 className="text-2xl font-bold my-6">Search Results</h1>
      <div className="flex flex-col gap-2">{renderedResults}</div>
      <Link to="/" className="p-3 w-1/3 rounded-full bg-cyan-600 text-center text-white hover:bg-sky-200 hover:text-slate-900">Try Another Search</Link>
    </div>
    </>
  )
}
