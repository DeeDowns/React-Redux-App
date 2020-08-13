import React, { useState } from 'react'
import {
    Card, CardText, CardBody, CardTitle, CardSubtitle, Button, CardDeck, Modal, ModalHeader, ModalBody, ModalFooter, Collapse, CardFooter
} from 'reactstrap'


const StudioCard = (props) => {
    const { movieData, className, buttonLabel } = props
    console.log(className)

    const [modal, setModal] = useState(false)
    const toggle = () => setModal(!modal)
    

    return (
    <div>
        <div>
        <Button color="danger" onClick={toggle}>More Info</Button>
        <Modal isOpen={modal} toggle={toggle} className={className}>
            <ModalHeader toggle={toggle}>{movieData.director}, {movieData.release_date}</ModalHeader>
            <ModalBody>{movieData.description}</ModalBody>
            <ModalFooter>
            <Button color="secondary" onClick={toggle}>Close</Button>
            </ModalFooter>
        </Modal>
    </div>
    </div>
)

}

export default StudioCard