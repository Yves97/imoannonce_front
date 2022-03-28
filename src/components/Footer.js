import React from 'react'
import { Link } from 'react-router-dom'

export const Footer = () => {
    return (
        <footer>
            <div className="container">
            <div className="row">
                <div className="col-md-12">
                <nav className="nav-footer">
                    <ul className="list-inline">
                        <li className="list-inline-item">
                            <Link to="/">Acceuil</Link>
                        </li>
                        <li className="list-inline-item">
                            <Link to="/announcement">Annonces</Link>
                        </li>
                    </ul>
                </nav>
                <div className="copyright-footer">
                    <p className="copyright color-text-a">
                        &copy; Copyright
                        <span className="color-a mr-3 ml-3">ImoAnnonces</span> Tous droits reservés
                    </p>
                </div>
                    <div className="credits">
                        Developpé par <Link to="/">Yves Amani</Link>
                    </div>
                </div>
            </div>
            </div>
        </footer>
    )
}