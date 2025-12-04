import { Link } from 'react-router-dom';
import SearchInput from '../components/SearchInput'

export default function Header() {
  return (
    <div className="flex items-center justify-between px-4 border-b h-14">
      <div>
          <Link to="/">BrewDog</Link>
        </div>
      <SearchInput />
    </div>
  )
}
