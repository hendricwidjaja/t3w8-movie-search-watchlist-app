// import './App.css' 
import React from "react";
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from './pages/Home.jsx';
import WatchlistProvider from "./context/WatchlistContext.jsx";
import Watchlist from "./pages/Watchlist.jsx";
import Navbar from "./components/Navbar.jsx";
import Details from "./pages/Details.jsx";
import NotificationProvider from "./context/NotificationContext.jsx";
import NotificationBar from "./components/NotificationBar.jsx";

function App() {

  return (
    <NotificationProvider>
      <WatchlistProvider>
        <Router>
          <NotificationBar />
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/watchlist' element={<Watchlist />} />
            <Route path='/details/:id' element={<Details />} />
          </Routes>
        </Router>
      </WatchlistProvider>
    </NotificationProvider>
  )
}

export default App
