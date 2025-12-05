import type { BrewSummary } from '../types/brewSummary'

type SearchResponse = BrewSummary[]

export async function searchBrews(term: string): Promise<BrewSummary[]> {
    const res = await fetch(`https://punkapi.online/v3/beers?page=1&per_page=30&beer_name=${term}`);
    const data: SearchResponse = await res.json();
    console.log(data)
    
    //map over data and extract values we are interested in
    //Without this our mapping function is wrong!
    return data.map(( {  name, tagline, first_brewed, abv }) => {
        return {
            name,
            tagline,
            first_brewed,
            abv,
        };
    });
}