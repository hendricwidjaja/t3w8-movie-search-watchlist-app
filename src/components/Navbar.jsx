import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <nav className='navbar navbar-expand navbar-light bg-light'>
            <div className='container-fluid'>
                <Link className='navbar-brand' to='/'>MovieApp</Link>
            </div>
            <div className='collapse navbar-collapse'>
                <ul className='navbar-nav'>
                    <li className='navbar-item'>
                        <Link className='nav-link' to='/'>Home</Link>
                    </li>
                    <li className='navbar-item'>
                        <Link className='nav-link' to='/watchlist'>Watchlist</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}