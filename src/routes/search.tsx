import { createFileRoute } from '@tanstack/react-router'
import { createServerFn } from '@tanstack/react-start'
import MovieCard from '../components/MovieCard'
import Header from '../components/Header'
import { Movie } from '../types'
import { z } from 'zod';
const QuerySchema = z.object({
    query: z.string().min(1)
});

const searchMoviesAPI = createServerFn()
.inputValidator(QuerySchema )
.handler(async ({data}) => {
console.log('searchMoviesAPI called with data:', data);

if(!data || !data.query || data.query.trim() === '') {
    console.log('Empty query, returning empty results');
    return [];
}
if(!process.env.TMDB_AUTH_TOKEN) {
    throw new Error('TMDB_AUTH_TOKEN is not defined in environment variables');
}
    const { query } = data;
    if (!query || query.trim() === '') {
        return [];
    }

    const searchQuery = query?.trim().toLowerCase();

    // console.log('Searching for movies with query:', searchQuery);
    console.log('Using TMDB_AUTH_TOKEN:', process.env.TMDB_AUTH_TOKEN)
    const res = await fetch(
        `https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1&query=${encodeURIComponent(searchQuery)}`,
        {
            headers: {
                Authorization: `Bearer ${process.env.TMDB_AUTH_TOKEN}`,
                'Content-Type': 'application/json'
            }
        }
    );
    const searchResults = await res.json();
    console.log('Search results:', searchResults);
    return searchResults.results || [];
})

export const Route = createFileRoute('/search')({
    validateSearch: (search: Record<string, unknown>): { movie?: string } => {
        return {
            movie: typeof search.movie === 'string' ? search.movie : ''
        };
    },
    loaderDeps: ({ search: { movie } }) => ({ movie }),
    loader: async ({ deps: { movie } }) => {
        if (!movie) {
            return { results: [], searchQuery: '' };
        }
        const results = await searchMoviesAPI({ data: { query: movie } });
        return { results, searchQuery: movie };
    },
    component: SearchComponent,
})

function SearchComponent() {
    const { results, searchQuery } = Route.useLoaderData();

    return (
        <div className="min-h-screen bg-black">
            <Header />

            <div className='container relative mx-auto mt-20 px-4 md:px-6'>
                {searchQuery && (
                    <div className="mb-8">
                        <h2 className='text-white text-2xl font-semibold'>
                            Search Results for "{searchQuery}"
                        </h2>
                        <p className="text-white/60 text-sm mt-2">
                            {results.length} {results.length === 1 ? 'result' : 'results'} found
                        </p>
                    </div>
                )}

                <div aria-live="polite" aria-atomic="true" className="sr-only">
                    {searchQuery ? `${results.length} results for ${searchQuery}` : `${results.length} results`}
                </div>

                {results.length > 0 ? (
                    <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 md:gap-4 pb-12'>
                        {results.map((movie: Movie) => (
                            <MovieCard key={movie.id} movie={movie} />
                        ))}
                    </div>
                ) : searchQuery ? (
                    <div className="flex flex-col items-center justify-center py-20">
                        <p className="text-white/60 text-lg">No results found for "{searchQuery}"</p>
                        <p className="text-white/40 text-sm mt-2">Try searching for something else</p>
                    </div>
                ) : null}
            </div>
        </div>
    )
}
