import type { BrewDetails } from "../types/brewDetails";


//create an async function that gets a specific brew
//Use brewdetails as an interface for the response

export default async function getBrew (name: string): Promise<BrewDetails> {
    const response = await fetch(`https://punkapi.online/v3/beers?page=1&per_page=30&beer_name=${name}`)
    const data = await response.json();
    console.log(data)
    
    return data as BrewDetails
}