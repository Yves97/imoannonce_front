import React from 'react'
import { Link,NavLink } from 'react-router-dom'

export const Header = () => {
    
    return (
        <nav className="navbar navbar-default navbar-trans navbar-expand-lg fixed-top">
            <div className="container">
            <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarDefault"
                aria-controls="navbarDefault" aria-expanded="false" aria-label="Toggle navigation">
                <span></span>
                <span></span>
                <span></span>
            </button>
            <NavLink className="navbar-brand text-brand" to="/">Imo<span className="color-b">Annonces</span></NavLink>
            <div className="navbar-collapse collapse justify-content-center" id="navbarDefault">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/" style={({ isActive }) => (isActive ? {color: '#2eca6a'} : {color: '#000'})}>Accueil</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/announcement" style={({ isActive }) => (isActive ? {color: '#2eca6a'} : {color: '#000'})}>Annonces</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/dashboard" style={({ isActive }) => (isActive ? {color: '#2eca6a'} : {color: '#000'})}>Dashboard</NavLink>
                    </li>
                </ul>
            </div>
            </div>
        </nav>
    )
}