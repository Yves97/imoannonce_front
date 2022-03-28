import React from 'react'
import { Link } from 'react-router-dom'

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
            <a className="navbar-brand text-brand" href="index.html">Imo<span className="color-b">Annonces</span></a>
            <div className="navbar-collapse collapse justify-content-center" id="navbarDefault">
                <ul className="navbar-nav">
                <li className="nav-item">
                    <Link className="nav-link active" to="/">Accueil</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/announcement">Annonces</Link>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="property-grid.html">Property</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="blog-grid.html">Blog</a>
                </li>
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown"
                    aria-haspopup="true" aria-expanded="false">
                    Pages
                    </a>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a className="dropdown-item" href="property-single.html">Property Single</a>
                    <a className="dropdown-item" href="blog-single.html">Blog Single</a>
                    <a className="dropdown-item" href="agents-grid.html">Agents Grid</a>
                    <a className="dropdown-item" href="agent-single.html">Agent Single</a>
                    </div>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="contact.html">Contact</a>
                </li>
                </ul>
            </div>
            </div>
        </nav>
    )
}