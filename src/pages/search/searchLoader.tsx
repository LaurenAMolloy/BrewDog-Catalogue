import type { BrewSummary } from "../../api/types/brewSummary";
import { searchBrews } from "../../api/queries/searchBrews";
import { redirect } from "react-router";

export interface SearchLoaderResult {
    searchResults: BrewSummary[]
    term: string,
}

export async function searchLoader({ request } : {request : Request}): Promise<SearchLoaderResult> {
    
    //create new instance of this url from request object
    const { searchParams } = new URL(request.url);
    //pull term out of url!
    const term = searchParams.get('term');
    console.log(term);

    if(!term){
        //throw new Error('Search term muse be provided!')
        throw redirect('/')   
    }


    const results = await searchBrews(term)
    console.log(results)

        
    return {
        searchResults: results,
        term
    }      
}

