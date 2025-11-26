import { createFileRoute } from '@tanstack/react-router'
import Hero from '../components/Hero'
import TrendingNow from '../components/TrendingNow'
import { createServerFn } from '@tanstack/react-start';

const getMovies = createServerFn().handler(async () => {
  const res = await fetch(
    `https://api.themoviedb.org/3/trending/all/week?language=en-US`,
    {
      headers: {
        Authorization: `Bearer ${process.env.TMDB_AUTH_TOKEN}`,
        'Content-Type': 'application/json'
      }
    }
  );
  console.log('Fetch response status:', res.status);
  if (!res.ok) {
    throw new Error(`Failed to fetch movies: ${res.status} ${res.statusText}`);
  }
  const data = await res.json();
  return data.results;
});

export const Route = createFileRoute('/')({
  loader: async () => {
    try {

    const movies = await getMovies();
    console.log('Movies fetched in loader:', movies);
    return { movies: movies, error: null }
    } catch (error) {
      console.error('Error fetching movies in loader:', error);
      return { movies: [], error: (error as Error).message }
    }

  }, component: App
})

function App() {
  const { movies, error } = Route.useLoaderData()
  if (error) {
    return <div className="min-h-screen flex items-center justify-center bg-background text-foreground">
      <div className="text-center">
        <h1 className="text-2xl font-bold mb-4">Error Loading Movies</h1>
        <p className="text-red-500">{error}</p>
      </div>
    </div>
  }
  return ( <main>
      <div className="min-h-screen bg-background text-foreground transition-colors duration-300">

        <Hero />
        <div className='container px-6'>
          <TrendingNow movies={movies} />
        </div>
      </div>
    </main>)
}
