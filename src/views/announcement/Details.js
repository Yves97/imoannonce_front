import React from 'react'
import {Header} from '../../components/Header'
import {Footer} from '../../components/Footer'
import Slide3 from '../../assets/images/slide-3.jpg'
const Details = () => {
    return (
        <React.Fragment>
            <Header/>
            <section class="intro-single">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12 col-lg-8">
                            <div class="title-single-box">
                                <h1 class="title-single">304 Blaster Up</h1>
                                <span class="color-text-a">Chicago, IL 606543</span>
                            </div>
                        </div>
                        <div class="col-md-12 col-lg-4">
                            <nav aria-label="breadcrumb" class="breadcrumb-box d-flex justify-content-lg-end">
                                <ol class="breadcrumb">
                                <li class="breadcrumb-item">
                                    <a href="index.html">Home</a>
                                </li>
                                <li class="breadcrumb-item">
                                    <a href="property-grid.html">Properties</a>
                                </li>
                                <li class="breadcrumb-item active" aria-current="page">
                                    304 Blaster Up
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
                    <div class="row mt-5 mb-5">
                        <div class="col-md-12">
                            <div class="title-box-d">
                                <h3 class="title-d">Description</h3>
                            </div>
                        </div>
                        <div class="col-md-6 property-description">
                            <p class="description color-text-a">
                                Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit
                                neque, auctor sit amet
                                aliquam vel, ullamcorper sit amet ligula. Cras ultricies ligula sed magna dictum porta.
                                Curabitur aliquet quam id dui posuere blandit. Mauris blandit aliquet elit, eget tincidunt
                                nibh pulvinar quam id dui posuere blandit.
                            </p>
                            <p class="description color-text-a no-margin">
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