import React from "react";

export default function MovieCard({movie}){
    return (
        <div className="col-md-4 movie-card">
            <h3>{movie.Title}</h3>
            <p>{movie.Year}</p>
            <img src={movie.Poster} alt={`${movie.Title} Poster`} />
        </div>
    )
}