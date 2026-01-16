//import brew summary
import type { BrewSummary } from "../api/types/brewSummary"
import { Link } from 'react-router'

interface BrewListItemProps {
  brew: BrewSummary
}

export default function BrewCardItem({ brew } : BrewListItemProps) {

  return (
    <div className="flex flex-col gap-2 border-2 border-slate-100 shadow bg-slate-100 w-full py-2 px-2 rounded">
      <div className="text-2xl font-bold">{brew.name}</div>
        <div className="flex flex-row justify-between">
          <div className="text-slate-400">{brew.tagline}</div>
          </div>
          <Link className="bg-slate-800 text-white text-center rounded p-1 hover:bg-sky-200 hover:text-slate-700" to={`/details/${brew.id}`}>View Details</Link>
    </div>
  )
}
