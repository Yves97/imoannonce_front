import React, {useEffect,useState} from 'react'
import {Header} from '../../components/Header'
import {Footer} from '../../components/Footer'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { getAnnouncement } from '../../services/announcements'
import { baseUrl } from '../../config/base/baseUrl'

const Details = () => {

    const { id } = useParams()
    const [announcement,setAnnouncement] = useState(null)
    const [loading,setLoading] = useState(false)

    useEffect(()=>{
        async function announcement(){
            try{
                const response = await getAnnouncement(id)
                if(response.ok){
                    const data = await response.json()
                    setAnnouncement(data.data)
                    setLoading(false)
                }else{
                    const error = response.json()
                }
            }catch(e){
                console.log(e)
            }
        }
        announcement()
    },[])

    const renderAnnonce = () => {
        if(!announcement){
            return (
                <div className='container mb-5 mt-5' style={{height : '50vh',display: 'flex',justifyContent : 'center',alignItems : 'center'}}>
                    <p>Annonce non trouvé</p>
                </div>
            )
        }
        return (
            <React.Fragment>
                <section className="intro-single">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 col-lg-8">
                                <div className="title-single-box">
                                    <h1 className="title-single">{announcement.title}</h1>
                                    <span className="color-text-a">#{announcement.id}</span>
                                </div>
                            </div>
                            <div className="col-md-12 col-lg-4">
                                <nav aria-label="breadcrumb" className="breadcrumb-box d-flex justify-content-lg-end">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item">
                                            <Link to="/">Acceuil</Link>
                                        </li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>
                </section>
                <section className='main-single'>
                    <div className='container'>
                        <img src={`${baseUrl}announcement/pictures/${announcement.image}`} className="img-details img-fluid"  />
                        <div className="row mt-5 mb-5">
                            <div className="col-md-12">
                                <div className="title-box-d">
                                    <h3 className="title-d">Description</h3>
                                </div>
                            </div>
                            <div className="col-md-6 property-description">
                                <p className="description color-text-a">
                                    {announcement.description}
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        )
    }
    return (
        <React.Fragment>
            <Header/>
                {renderAnnonce()}
            <Footer/>
        </React.Fragment>
    )
}

export default Details