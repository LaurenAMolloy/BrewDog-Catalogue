import type { BrewDetails } from "../types/brewDetails"

const FEATUREDBREW = [
    11,
    12,
    13,
    14
]

export async function getFeatured(){
    //mapover featured
    //retrieve details for 4 different 
    const promises = FEATUREDBREW.map(async (id) => {
        const res = await fetch(`https://punkapi.online/v3/beers/${id}`);

        if(!res.ok) throw new Error(`Failed to fetch brew ${id}`)

        return res.json();
    });
    //resolve all four requests at the same time!
    const data = await Promise.all(promises);
    return data as BrewDetails[];
}