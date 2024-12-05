import axios from "axios";
import React, { useState } from "react";
import MovieCard from "../components/MovieCard";

export default function Home() {
    const [query, setQuery] = useState('');
    const [movies, setMovies] = useState([]);

    const fetchMovies = async () => {
        // Using fetch()
        // const response = await fetch(`http://www.omdbapi.com/${apikey}/${query}`); 

        // Using axios()
        if (query) {
            const response = await axios.get(`http://www.omdbapi.com/`, {
                params: {
                    apikey: 'd20444e',
                    s: query
                }
            });
            console.log(response.data);
            setMovies(response.data.Search || []);
        }
    };

    return (
        <div className="container my-4">

            <h1 className="text-center mb-4">Movie Search</h1>
            <div className="row">
                <div className="col-md-8 offset-md-2">
                    <input
                        type="text"
                        placeholder="Search for Movies..."
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                    />
                    <button className="btn btn-primary btn-block mt-2" onClick={fetchMovies}>Search</button>
                </div>
            </div>
            <div className="row mt-4">
                {
                    movies.map((movie) => (
                        <MovieCard key={movie.imdbID} movie={movie} />
                    ))
                }
            </div>
        </div>
    )
}