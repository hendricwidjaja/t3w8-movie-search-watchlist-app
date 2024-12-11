import React from "react";
import { useWatchlist } from "../context/WatchlistContext";
import { Link } from "react-router-dom";

export default function MovieCard({ movie }) {

    const { watchlist, addToWatchlist } = useWatchlist();

    const isInWatchlist = watchlist.some((item) => item.imdbID === movie.imdbID);

    return (
        <div className="col-md-4 movie-card" style={{ maxWidth: '18rem' }}>
            <h3>{movie.Title}</h3>
            <p>{movie.Year}</p>
            <img
                src={movie.Poster}
                alt={`${movie.Title} Poster`}
                className='card-img-top' />
            <button
                className={`ntn ${isInWatchlist ? `btn-success` : `btn-primary`}`}
                onClick={() => !isInWatchlist && addToWatchlist(movie)}
                disabled={isInWatchlist}>
                {isInWatchlist ? `Added to Watchlist` : `Add to Watchlist`}
            </button>
            <Link to={`/details/${movie.imdbID}`} className='btn btn-primary'>View Details</Link>
        </div>
    )
}