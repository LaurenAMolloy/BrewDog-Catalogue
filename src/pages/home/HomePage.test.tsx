import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import HomePage from './HomePage';
import { test, vi, expect } from 'vitest'
//Testing 
//Loader provide two featured brews
//User can see two brews by name
//Each brew provides a way to naviagte to its details

//mocking a module - useLoaderData
vi.mock('react-router', async () => {
    const actual = await vi.importActual<typeof import('react-router')>('react-router')
    return{
        ...actual,
        //overriding useLoaderData
        useLoaderData: () => ({
            featuredBrews: [
                {
                    id: 1,
                    name: 'Punk IPA',
                    tagline: 'Post Modern Classic',
                    abv: 6,
                },
                {
                    id: 2,
                    name: 'Storm',
                    tagline: 'Post Modern classic'
                }
            ]
        })
    }
});

test('loader provides two featured brews', ()=> {

    render(
        <MemoryRouter>
            <HomePage />
        </MemoryRouter>
    )

    //How can we get these elements
    const cards = screen.getAllByRole('article');
    
    //Assertions
    expect(cards).toHaveLength(2);
});
