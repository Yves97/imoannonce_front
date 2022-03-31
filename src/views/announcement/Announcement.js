import React , {useEffect,useState} from "react";
import { Link } from "react-router-dom";
import { Header } from "../../components/Header";
import {Footer} from '../../components/Footer'
import Slide1 from '../../assets/images/slide-1.jpg'

import { getAnnouncements } from "../../services/announcements";

const Announcement = () => {
    const [loading,setLoading] = useState(false)
    const [announcements,setAnnouncements] = useState([])

    useEffect(()=>{
        async function announcement(){
            try {
                setLoading(true)
                const response = await getAnnouncements()
                if(response.ok){
                    const data = await response.json()
                    console.log(data)
                    setAnnouncements(data.announcements)
                    setLoading(false)
                }else{
                    const error = response.json()
                }
            } catch (error) {
                setLoading(false)
            }
        }
        announcement()
    },[])

    const renderAnnonces = () => {
        if(loading){
            return (<p>Chargement en cours..</p>)
        }else{
            return <React.Fragment>
                {announcements.map((item,index)=>{
                    return <div className="col-md-4 mb-5" key={index}>
                    <Link to={`/announcement/${item.id}`}>
                        <div className="card-box-b card-shadow news-box">
                            <div className="img-box-b">
                                <img src={Slide1} alt="" className="img-b img-fluid"/>
                            </div>
                            <div className="card-overlay  p-3">
                                <div className="card-header-b">
                                    <h3>{item.title}</h3>
                                    <p>{item.description}</p>
                                    <p>publié  le {item.createDate}</p>
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>
                })} 
            </React.Fragment>
        }
    }

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
                                                    <span className="color-b">Decouvrez les annonces</span>
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
            <div className="container mb-5 mt-5">
                <h1>Notre liste</h1>
                <div className="row">
                    {renderAnnonces()}
                </div>
            </div>
            <Footer/>   
        </React.Fragment>
    )
}
export default Announcement