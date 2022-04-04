import React, {useEffect,useState} from 'react'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import Slide1 from '../../assets/images/slide-1.jpg'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import {getAnnouncements,deleteAnnonce} from '../../services/announcements'
import { baseUrl } from '../../config/base/baseUrl'

const Dashboard = () => {
    const [loading,setLoading] = useState(false)
    const [announcements,setAnnouncements] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        async function announcement(){
            try {
                setLoading(true)
                const response = await getAnnouncements()
                if(response.ok){
                    const data = await response.json()
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

    const deleteItem = async  (item) => {
        Swal.fire({
            title: 'Etes vous sur de supprimer?',
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: 'Oui',
            denyButtonText: `Non`,
          }).then((result) => {
            if (result.isConfirmed) {
                deleteAnnonce(item.id)
                    .then((response)=>{
                    Swal.fire('Supprimé', '', 'success')  
                    window.location.reload();
                }).catch((e)=>{ 
                    console.log(e)
                })
               
            } else if (result.isDenied) {
              Swal.fire('Annulé', '', 'info')
            }
          })
    }
    const updateItem = (item) => navigate(`/announcement/update/${item.id}`)
    const createAnnouncement = (item) => navigate('/announcement/create')

    const renderAnnouncementList = () => {
        if(loading) return <p>Chargement</p>
        return (
            <ul className="responsive-table">
                <li className="table-header">
                    <div className="col col-1">Id</div>
                    <div className="col col-2">Nom</div>
                    <div className="col col-3">Photo</div>
                    <div className="col col-3" data-label="Amount">Option</div>
                </li>
                {announcements.map((item,index)=>{
                    return (
                        <React.Fragment key={index}>
                        <li className="table-row">
                            <div className="col col-1" data-label="Job Id">{item.id}</div>
                            <div className="col col-2" data-label="Customer Name">{item.title}</div>
                            <div className="col col-3" data-label="Amount">
                                <img src={`${baseUrl}announcement/pictures/${item.image}`} className="img-fluid" style={{height : '70px',width: '100px'}}/>
                            </div>
                            <div className="col col-2" data-label="Customer Name">
                                <i className='fa fa-trash mr-3' style={{cursor : 'pointer'}} onClick={() => deleteItem(item)}></i>
                                <i className='fa fa-edit' style={{cursor : 'pointer'}} onClick={ () => updateItem(item) } ></i>
                            </div>
                        </li>
                    </React.Fragment>
                    )
                })}
            </ul>
            )
        }


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
                <div className='row'>
                    <div className='col-md-6'>
                        <h2>Liste des annonces</h2>
                    </div>
                    <div className='col-md-6 text-right'>
                        <button className='btn btn-a' onClick={createAnnouncement}>Créer une annonce</button>
                    </div>
                </div>
                {renderAnnouncementList()} 
            </div>
            <Footer/>
        </React.Fragment>   
    )
}

export default Dashboard