import { Link } from 'react-router-dom';
import SearchInput from '../components/SearchInput'

export default function Header() {
  return (
    <div className="flex flex-col items-center justify-between px-4 pt-2 border-b min-h-14 gap-2 sm:flex-row">
      <div className='font-extrabold text-2xl'>
          <Link to="/">BrewDog</Link>
        </div>
      <SearchInput />
    </div>
  )
}
