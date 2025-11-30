import { Link } from "@tanstack/react-router";
import { Card } from "@/components/ui/card"
import type { Movie } from "../types"

const TMDB_IMAGES_ASSET_URL = "https://image.tmdb.org/t/p/w500/";

const MovieCard = ({ movie }: { movie: Movie }) => {
    return (
        <Link to="/watch/$movieId" params={{ movieId: String(movie.id) }}>
            <Card
                className="rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-xl outline-blue-200 p-0 border-0 w-28 h-[9.8rem] md:w-45 md:h-63"
            >
                <img
                    src={movie?.poster_path ? TMDB_IMAGES_ASSET_URL + movie?.poster_path : "/placeholder.svg"}
                    alt={movie?.title || "Movie poster"}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110 z-10 rounded-2xl"
                />
            </Card>
        </Link>
    )
}

export default MovieCard;
