import React from "react";
import { useWatchlist } from "../context/WatchlistContext";
import { useNavigate } from "react-router-dom";

const Watchlist = () => {
    // Fetch two out of three returns from the custom hook
    const { watchlist, removeFromWatchlist } = useWatchlist();
    const navigate = useNavigate();

    return (
        <div>
            <button className='btn btn-secondary mb-3' onClick={() => navigate(-1)}>Go Back</button>
            <h2>Your Watchlist</h2>
            {console.log(watchlist)}
            {watchlist.length === 0 ? (
                <p>Your watchlist is empty. Start adding some movies!</p>
            ) : (
                <ul>
                    {watchlist.map((movie) => (
                        <li key={movie.imdbID}>
                            <strong>{movie.Title}</strong> ({movie.Year})
                            <img src={movie.Poster} alt={`${movie.Title} Poster`} />
                            <button
                                onClick={() => removeFromWatchlist(movie.imdbID)}
                                style={{ color: 'red' }}
                            >
                                Remove
                            </button>
                        </li>
                    ))}
                </ul>
            )
            }
        </div>
    )

}

export default Watchlist;