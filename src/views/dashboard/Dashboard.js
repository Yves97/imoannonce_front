import React from 'react'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import Slide1 from '../../assets/images/slide-1.jpg'
const Dashboard = () => {
    return (
        <React.Fragment>
            <Header/>
            <div className="intro intro-carousel mb-5" style={{height : '50vh'}}>
                <div id="carousel" className="owl-carousel owl-theme">
                    <div className="carousel-item-a intro-item bg-image" style={{backgroundImage: `url(${Slide1})`,height : '50vh'}}>
                        <div className="overlay overlay-a"></div>
                        <div className="intro-content display-table">
                            <div className="table-cell">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-lg-8">
                                            <div className="intro-body">
                                                <h1 className="intro-title mb-4">
                                                    <span className="color-b">Administration</span>
                                                </h1>
                                                <i className="fa fa-arrow-down"></i>
                                                {/* <p className="intro-subtitle intro-price">
                                                    <a href="#"><span className="price-a">Commencer</span></a>
                                                </p> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <h2>Liste des annonces</h2>
                    <ul className="responsive-table">
                        <li className="table-header">
                            <div className="col col-1">Id</div>
                            <div className="col col-2">Nom</div>
                            <div className="col col-3">Photo</div>
                            <div className="col col-3" data-label="Amount">Option</div>
                        </li>
                        <li className="table-row">
                            <div className="col col-1" data-label="Job Id">42235</div>
                            <div className="col col-2" data-label="Customer Name">John Doe</div>
                            <div className="col col-3" data-label="Amount">
                                <img src={Slide1} className="img-fluid" style={{height : '70px',width: '100px'}}/>
                            </div>
                            <div className="col col-2" data-label="Customer Name">
                                <i className='fa fa-trash mr-3'></i>
                                <i className='fa fa-edit'></i>
                            </div>
                        </li>
                        <li className="table-row">
                            <div className="col col-1" data-label="Job Id">42442</div>
                            <div className="col col-2" data-label="Customer Name">Jennifer Smith</div>
                            <div className="col col-3" data-label="Amount">
                                <img src={Slide1} className="img-fluid" style={{height : '70px',width: '100px'}}/>
                            </div>
                            <div className="col col-2" data-label="Customer Name">
                                <i className='fa fa-trash mr-3'></i>
                                <i className='fa fa-edit'></i>
                            </div>
                        </li>
                    </ul>
            </div>
            <Footer/>
        </React.Fragment>   
    )
}

export default Dashboard