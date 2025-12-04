//import type interface
import type { BrewDetails } from '../../api/types/brewDetails'
//fetching function
import { getFeatured } from '../../api/queries/getFeatured'

export interface HomeLoaderResult {
    featuredBrews : BrewDetails[]
}

export async function homeloader(): Promise<HomeLoaderResult> {
    const featuredBrews = await getFeatured();;

    return {
        featuredBrews,
    }
}