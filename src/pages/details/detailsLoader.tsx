//Retrieve the brew details type
import type { BrewDetails } from "../../api/types/brewDetails";
//Retrieve the getBrewFunction
import { getBrew } from '../../api/queries/'
//Retrieve the params

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

export default function detailsLoader() {
  return (
    <div>detailsLoader</div>
  )
}
