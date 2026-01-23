import { Link } from 'react-router-dom';

interface NoResultsPageProps {
    term: string
}

export default function NoResultsPage({ term }: NoResultsPageProps) {
  return (
    <div className="flex flex-col gap-4">
        <h1>Oops...</h1>
        <h2>No results for {term}!</h2>
        <Link to="/" className="inline-block p-2 max-w-[200px] rounded-full bg-cyan-900 text-center text-white hover:bg-sky-200 hover:text-slate-900">Try Another Search</Link>
    </div>
  )
}
