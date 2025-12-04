import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function SearchInput() {
    const[term, setTerm] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        navigate(`/search?term=${term}`);

        setTerm('');
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input
            placeholder="Search for brews"
            name="term"
            value={term}
            onChange={(e) => setTerm(e.target.value)}>
            </input>
        </form>
    </div>
  )
}

