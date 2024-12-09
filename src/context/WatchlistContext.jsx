import React, { createContext, useContext, useState } from "react";

const WatchlistContext = createContext();

export default function WatchlistProvider({ children }){
    const [watchlist, setWatchlist] = useState([]);

    // Add to Watchlist function
    const addToWatchlist = (movie) => {
        setWatchlist((prev) => [...prev, movie]);
    };

    // Delete from Watchlist function
    const removeFromWatchlist = (id) => {
        setWatchlist((prev) => prev.filter((movie) => movie.id != id))
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