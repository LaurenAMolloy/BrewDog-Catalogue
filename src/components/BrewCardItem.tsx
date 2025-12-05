//import brew summary
import type { BrewSummary } from "../api/types/brewSummary"
import { Link } from 'react-router-dom'

interface BrewListItemProps {
  brew: BrewSummary
}

export default function BrewCardItem({ brew } : BrewListItemProps) {

  return (
    <div className="flex flex-col gap-2 border-2 w-full py-2 px-2 rounded">
      <div className="text-2xl font-bold">{brew.name}</div>
        <div className="flex flex-row justify-between">
          <div className="text-slate-400">{brew.tagline}</div>
          <button>View</button>
        </div>
    </div>
  )
}
