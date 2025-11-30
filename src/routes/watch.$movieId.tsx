import { createFileRoute, useNavigate } from '@tanstack/react-router';
import { z } from 'zod';
import VideoPlayer from '../components/VideoPlayer';
import { getMovieTrailers } from '../api/trailers';

const WatchParamsSchema = z.object({
    movieId: z.string().refine((val) => !isNaN(parseInt(val, 10)), {
        message: 'Movie ID must be a valid number'
    })
});

export const Route = createFileRoute('/watch/$movieId')({
    params: {
        parse: (params) => {
            const result = WatchParamsSchema.safeParse(params);
            if (!result.success) {
                throw new Error('Invalid movie ID');
            }
            return result.data;
        },
        stringify: (params) => params
    },
    loader: async ({ params }) => {
        const movieIdNum = parseInt(params.movieId, 10);

        if (isNaN(movieIdNum)) {
            return { trailer: null, error: 'Invalid movie ID' };
        }

        try {
            const trailers = await getMovieTrailers({ data: { movieId: movieIdNum } });
            const mainTrailer = trailers[0] || null;

            if (!mainTrailer) {
                return { trailer: null, error: 'No trailers available for this movie' };
            }

            return { trailer: mainTrailer, error: null };
        } catch (err) {
            console.error('Error fetching trailers:', err);
            return { trailer: null, error: 'Failed to load trailers' };
        }
    },
    component: WatchComponent,
    preload: 'intent'
});

function WatchComponent() {
    const { trailer, error } = Route.useLoaderData();
    const navigate = useNavigate();

    return (
        <VideoPlayer
            trailer={trailer}
            error={error}
            onBack={() => navigate({ to: '/' })}
        />
    );
}
