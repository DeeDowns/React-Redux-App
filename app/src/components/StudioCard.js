import React, { useState } from 'react'
import {
    Button, Modal, ModalHeader, ModalBody, ModalFooter
} from 'reactstrap'
import '../styles/StudioCard.css'


const StudioCard = (props) => {
    const { movieData, className, buttonLabel } = props
    console.log(className)

    const [modal, setModal] = useState(false)
    const toggle = () => setModal(!modal)
    

    return (
        <div className='movie-card'>
        <Button color="danger" onClick={toggle}>More Info</Button>
        <Modal isOpen={modal} toggle={toggle} className={className}>
            <ModalHeader toggle={toggle}>Directed by {movieData.director}, {movieData.release_date}</ModalHeader>
            <ModalBody><span>Description:</span> {movieData.description}</ModalBody>
            <ModalFooter>
            <Button color="secondary" onClick={toggle}>Close</Button>
            </ModalFooter>
        </Modal>
    </div>

)

}

export default StudioCard