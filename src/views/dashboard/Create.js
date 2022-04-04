import React,{useState} from 'react'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { create } from '../../services/announcements'

const CreateAnnouncement = () => {
    const [title,setTitle] = useState('')
    const [description,setDescription] = useState('')
    const [image,setImage] = useState('')
    const [message,setMessage] = useState(null)
    const [loading,setLoading] = useState(false)

    const createAnnouncement = async (e) => {
        e.preventDefault()
        try {
            setLoading(true)
            const response = await create(title,description,image)
            if(response.ok){
                const result = await response.json()
                setMessage(result.message)
                setLoading(false)
            }else{
                const err = response.json()
                console.log(err)
                setLoading(false)
            }
        } catch (error) {
            console.log(error)
            setLoading(false)
        }
    }
  return (
    <React.Fragment>
        <Header/>
        <div className='container'>
            <section className="intro-single">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-lg-8">
                            <div className="title-single-box">
                                <h1 className="title-single">Créer annonce</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="contact">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 section-t8">
                            <div className="row">
                                <div className="col-md-7">
                                    <form className="form-a contactForm">
                                        <div className="row">
                                            <div className="col-md-12 mb-3">
                                                <div className="form-group">
                                                    <input type="text" className="form-control form-control-lg form-control-a" placeholder="Titre annonce" value={title} onChange={(e) => setTitle(e.target.value)}/>
                                                </div>
                                            </div>
                                            <div className="col-md-12 mb-3">
                                                <div className="form-group">
                                                    <input type="email" className="form-control form-control-lg form-control-a" placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
                                                </div>
                                            </div>
                                            <div className="col-md-12 mb-3">
                                                <div className="form-group">
                                                    <label htmlFor='img'>Choisir une autre image</label>
                                                    <input type="file" className="form-control form-control-lg form-control-a" name="image" onChange={(e) => setImage(e.target.files[0])} id="img" />
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                {!loading && <button type="button" className="btn btn-a" onClick={createAnnouncement}>Créer</button>}
                                                {message  && <p style={{color : 'green'}}>{message}</p>}
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
        <Footer/>
    </React.Fragment>
  )
}
export default CreateAnnouncement
