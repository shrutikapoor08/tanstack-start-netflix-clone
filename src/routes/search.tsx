import { createFileRoute } from '@tanstack/react-router'
import MovieCard from '../components/MovieCard'
import Header from '../components/Header'
import { Movie } from '../types'

async function searchMoviesAPI(query: string) {
    if (!query || query.trim() === '') {
        return [];
    }

    const searchQuery = query?.trim().toLowerCase();

    console.log('Searching for movies with query:', searchQuery);
    const res = await fetch(
        `https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1&query=${encodeURIComponent(searchQuery)}`,
        {
            headers: {
                Authorization: `Bearer ${process.env.TMDB_AUTH_TOKEN}`,
                'Content-Type': 'application/json'
            }
        }
    );
    const data = await res.json();
    console.log('Search results:', data);
    return data.results || [];
}

export const Route = createFileRoute('/search')({
    validateSearch: (search: Record<string, unknown>): { movie?: string } => {
        return {
            movie: typeof search.movie === 'string' ? search.movie : undefined
        };
    },
    loaderDeps: ({ search: { movie } }) => ({ movie }),
    loader: async ({ deps: { movie } }) => {
        if (!movie) {
            return { results: [], searchQuery: '' };
        }
        const results = await searchMoviesAPI(movie);
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
