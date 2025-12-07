import type { BrewDetails } from "../types/brewDetails";
//create an async function that gets a specific brew
//Use brewdetails as an interface for the response

export default async function getBrew (id: number): Promise<BrewDetails> {
    const response = await fetch(`https://punkapi.online/v3/beers/${id}`)
    const data = await response.json();
    //console.log(data)

    return data as BrewDetails
}