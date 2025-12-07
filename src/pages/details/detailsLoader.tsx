//Retrieve the brew details type
import type { BrewDetails } from "../../api/types/brewDetails";
//Retrieve the getBrewFunction
import getBrew from "../../api/queries/getBrew";
//Retrieve the params 
import type { Params } from 'react-router-dom'

// export interface BrewDetails {
//     name: string,
//     tagline: string,
//     image: string,
//     description: string,
//     abv: number,
//     food_pairing: string[]
// }

interface LoaderArgs {
    params: Params;
}

export interface DetailsLoaderResult {
    details: BrewDetails
}

export default async function detailsLoader({ params } : LoaderArgs): Promise<DetailsLoaderResult> {

    const { name } = params;

    if(!name) {
        throw new Error('Name must be provided')
    }

    const details = await getBrew(name);

  return {
    details
  }

}
