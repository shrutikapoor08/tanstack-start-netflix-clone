import { createServerFn } from '@tanstack/react-start';
import { z } from 'zod';

const MovieIdSchema = z.object({
    movieId: z.number()
});

export type Video = {
    id: string;
    key: string;
    name: string;
    site: string;
    type: string;
    official: boolean;
};

export const getMovieTrailers = createServerFn()
    .inputValidator(MovieIdSchema)
    .handler(async ({ data }) => {
        if (!process.env.TMDB_AUTH_TOKEN) {
            throw new Error('TMDB_AUTH_TOKEN is not defined in environment variables');
        }

        const { movieId } = data;
        const res = await fetch(
            `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
            {
                headers: {
                    Authorization: `Bearer ${process.env.TMDB_AUTH_TOKEN}`,
                    'Content-Type': 'application/json'
                }
            }
        );

        if (!res.ok) {
            throw new Error(`Failed to fetch trailers: ${res.status} ${res.statusText}`);
        }

        const response = await res.json();
        const videos: Video[] = response.results || [];

        // Filter for YouTube trailers and teasers
        const trailers = videos.filter(
            video => video.site === 'YouTube' &&
            (video.type === 'Trailer' || video.type === 'Teaser')
        );

        return trailers;
    });
