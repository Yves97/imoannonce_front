import React from 'react'
import {Header} from '../../components/Header'
import {Footer} from '../../components/Footer'
import { Link } from 'react-router-dom'

import Slide3 from '../../assets/images/slide-3.jpg'
const Details = () => {
    return (
        <React.Fragment>
            <Header/>
            <section className="intro-single">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-lg-8">
                            <div className="title-single-box">
                                <h1 className="title-single">Nom annonce</h1>
                                <span className="color-text-a">#1</span>
                            </div>
                        </div>
                        <div className="col-md-12 col-lg-4">
                            <nav aria-label="breadcrumb" className="breadcrumb-box d-flex justify-content-lg-end">
                                <ol className="breadcrumb">
                                <li className="breadcrumb-item">
                                    <Link to="/">Acceuil</Link>
                                </li>
                                <li className="breadcrumb-item">
                                    <a href="property-grid.html">Properties</a>
                                </li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
            </section>
            <section className='main-single'>
                <div className='container'>
                    <img src={Slide3} className="img-details img-fluid"  />
                    <div className="row mt-5 mb-5">
                        <div className="col-md-12">
                            <div className="title-box-d">
                                <h3 className="title-d">Description</h3>
                            </div>
                        </div>
                        <div className="col-md-6 property-description">
                            <p className="description color-text-a">
                                Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit
                                neque, auctor sit amet
                                aliquam vel, ullamcorper sit amet ligula. Cras ultricies ligula sed magna dictum porta.
                                Curabitur aliquet quam id dui posuere blandit. Mauris blandit aliquet elit, eget tincidunt
                                nibh pulvinar quam id dui posuere blandit.
                            </p>
                            <p className="description color-text-a no-margin">
                                Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Donec rutrum congue leo eget
                                malesuada. Quisque velit nisi,
                                pretium ut lacinia in, elementum id enim. Donec sollicitudin molestie malesuada.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
                
            <Footer/>
        </React.Fragment>
        
    )
}

export default Details