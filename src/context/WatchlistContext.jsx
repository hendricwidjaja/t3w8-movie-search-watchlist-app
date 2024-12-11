import React, { createContext, useContext, useState } from "react";
import { useNotification } from "./NotificationContext";

const WatchlistContext = createContext();

export default function WatchlistProvider({ children }){
    const [watchlist, setWatchlist] = useState([]);
    const { showNotification } = useNotification();

    // Add to Watchlist function
    const addToWatchlist = (movie) => {
        setWatchlist((prev) => [...prev, movie]);
        showNotification(`${movie.Title} added to watchlist!`);
    };

    // Delete from Watchlist function
    const removeFromWatchlist = (id) => {
        setWatchlist((prev) => prev.filter((movie) => movie.imdbID != id))
        showNotification(`Movie removed from watchlist!`);
    };

    return (
        <WatchlistContext.Provider value={{ watchlist, addToWatchlist, removeFromWatchlist}}>
            {children}
        </WatchlistContext.Provider>
    )
}

// Create a custom hook here
export function useWatchlist() {
    // Simply return
    // return useContext(WatchlistContext)

    let context = useContext(WatchlistContext);
    if (!context) {
        console.log("No movies added.");
    }
    return context;
}