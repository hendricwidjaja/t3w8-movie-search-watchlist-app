import React from "react";

export default function MovieCard({movie}){
    return (
        <div>
            <h3>{movie.Title}</h3>
            <p>{movie.Year}</p>
            <img src={movie.Poster} alt={`${movie.Title} Poster`} />
        </div>
    )
}