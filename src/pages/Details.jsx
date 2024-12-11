import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

export default function Details() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [movieDetails, setMovieDetails] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fecthMovieDetails = async () => {
            apikey = import.meta.env.VITE_API_KEY
            try {
                const response = await fetch(`http://www.omdbapi.com/?apikey=${apikey}&i=${id}`);
                const data = await response.json();
    
                if (data.Response === 'True') {
                    setMovieDetails(data);
                } else {
                    setMovieDetails(null);
                }
            } catch (error) {
                console.error("Failed to fetch movie details", error);
            } finally {
                setLoading(false);
            }
        }

        fecthMovieDetails();
    }, [id])

    if (loading) {
        return <p>Loading...</p>
    }

    if (!movieDetails) {
        return <p>Movie details not found!</p>
    }

    return (
        <div className='container mt-4'>
            <button className='btn btn-secondary mb-3' onClick={() => navigate(-1)}>Go Back</button>
            <h2>{movieDetails.Title}</h2>
            <p>{movieDetails.Year}</p>
            <img 
            src={movieDetails.Poster.replace('SX300', 'SX700')} 
            alt={`${movieDetails.Title} Poster`} 
            className='card-img-top'
            style={{width: '300px'}}
            />
            <p><strong>Year:</strong> {movieDetails.Year}</p>
            <p><strong>Genre:</strong> {movieDetails.Genre}</p>
            <p><strong>Plot:</strong> {movieDetails.Plot}</p>
            <p><strong>Actors:</strong> {movieDetails.Actors}</p>
            <p><strong>IMDB Rating:</strong> {movieDetails.imdbRating}</p>
        </div>
    )
}