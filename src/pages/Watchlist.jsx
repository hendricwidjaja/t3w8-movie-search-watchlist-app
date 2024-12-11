import React from "react";
import { useWatchlist } from "../context/WatchlistContext";
import { Link, useNavigate } from "react-router-dom";

const Watchlist = () => {
    // Fetch two out of three returns from the custom hook
    const { watchlist, removeFromWatchlist } = useWatchlist();
    const navigate = useNavigate();

    return (
        <div style={{ maxWidth: '18rem' }}>
            <button className='btn btn-secondary mb-3' onClick={() => navigate(-1)}>Go Back</button>
            <h2>Your Watchlist</h2>
            {watchlist.length === 0 ? (
                <p>Your watchlist is empty. Start adding some movies!</p>
            ) : (
                <ul>
                    {watchlist.map((movie) => (
                        <li key={movie.imdbID}>
                            <p><strong>{movie.Title}</strong> ({movie.Year})</p>
                            <img src={movie.Poster} alt={`${movie.Title} Poster`} className='card-img-top' />
                            <button
                                onClick={() => removeFromWatchlist(movie.imdbID)}
                                style={{ color: 'red' }}
                            >
                                Remove
                            </button>
                            <Link to={`/details/${movie.imdbID}`} className='btn btn-primary'>View Details</Link>
                        </li>
                    ))}
                </ul>
            )
            }
        </div>
    )

}

export default Watchlist;