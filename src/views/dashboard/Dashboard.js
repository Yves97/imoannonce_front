import React, {useEffect,useState} from 'react'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import Slide1 from '../../assets/images/slide-1.jpg'
import Swal from 'sweetalert2'
import {getAnnouncement,getAnnouncements,deleteAnnonce} from '../../services/announcements'

const Dashboard = () => {
    const [loading,setLoading] = useState(false)
    const [announcements,setAnnouncements] = useState([])

    useEffect(() =>{
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

    const deleteItem = async  (item) => {
        Swal.fire({
            title: 'Etes vous sur de supprimer?',
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: 'Oui',
            denyButtonText: `Non`,
          }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                deleteAnnonce(item.id).then((response)=>{
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
                                <img src={Slide1} className="img-fluid" style={{height : '70px',width: '100px'}}/>
                            </div>
                            <div className="col col-2" data-label="Customer Name">
                                <i className='fa fa-trash mr-3' style={{cursor : 'pointer'}} onClick={()=>deleteItem(item)}></i>
                                <i className='fa fa-edit'></i>
                            </div>
                        </li>

                        {/* <div className="modal fade" id="exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                        <div className="modal-dialog modal-dialog-centered" role="document">
                            <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLongTitle">Modal title</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                ...
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-primary" onClick={()=>deleteItem(item.id)}>Save changes</button>
                            </div>
                            </div>
                        </div>
                        </div> */}
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
                <h2>Liste des annonces</h2>
                {renderAnnouncementList()} 
            </div>
            <Footer/>
        </React.Fragment>   
    )
}

export default Dashboard