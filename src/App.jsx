// import './App.css' 
import React from "react";
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from './pages/Home.jsx';
import WatchlistProvider from "./context/WatchlistContext.jsx";
import Watchlist from "./pages/Watchlist.jsx";
import Navbar from "./components/Navbar.jsx";

function App() {

  return (
    <WatchlistProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/watchlist' element={<Watchlist />} />
          <Route path='/details/:id' element={<div>Details</div>} />
        </Routes>
      </Router>
    </WatchlistProvider>
  )
}

export default App
