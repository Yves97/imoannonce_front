import React from 'react'
import { Header } from '../../components/Header'
//images
import Slide1 from '../../assets/images/slide-1.jpg'
import Slide2 from '../../assets/images/slide-2.jpg'
import Slide3 from '../../assets/images/slide-3.jpg'

const Home  = () => {
    return (
        <React.Fragment>
            <Header/>
            <div className="intro intro-carousel">
                <div id="carousel" className="owl-carousel owl-theme">
                    <div className="carousel-item-a intro-item bg-image" style={{backgroundImage: `url(${Slide1})`}}>
                        <div className="overlay overlay-a"></div>
                        <div className="intro-content display-table">
                            <div className="table-cell">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-lg-8">
                                            <div className="intro-body">
                                                <h1 className="intro-title mb-4">
                                                <span className="color-b">Bienvenu(e)</span>
                                                <br/> Suivez les annonces</h1>
                                                <p className="intro-subtitle intro-price">
                                                <a href="#"><span className="price-a">Commencer</span></a>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
export default Home