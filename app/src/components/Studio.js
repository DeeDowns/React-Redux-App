import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { fetchMovies } from '../store/actions/studioActions'
import StudioCard from './StudioCard'
import {Card, Button, ModalHeader, Modal, ModalBody, ModalFooter,CardDeck, CardTitle} from 'reactstrap'


const Studio = props => {
    console.log('Studio props', props)

    useEffect(() => {
        props.fetchMovies()
    }, [])

    
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

    return (
        <section>
                {/* <div>
                    <Button color="danger" onClick={toggle}>button</Button>
                    <Modal isOpen={modal} toggle={toggle} >
                        <ModalHeader toggle={toggle}>Modal title</ModalHeader>
                        <ModalBody>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </ModalBody>
                        <ModalFooter>
                        <Button color="primary" onClick={toggle}>Do Something</Button>{' '}
                        <Button color="secondary" onClick={toggle}>Cancel</Button>
                        </ModalFooter>
                    </Modal>
                    </div>  */}
 
           
    
            <h1>Studio Ghibli Movies</h1>
            {props.isLoading ? <h4>Loading movies...</h4> : null}
            {props.error ? <h4 style={{ color: 'orange'}}>oops something went wrong... {props.error}</h4> : null}
            {props.movies.length > 0 ?    
                <div>
                {props.movies.map( movie => (
                    <div>
                        <CardTitle>{movie.title}</CardTitle>
                        <StudioCard key={movie.id} movieData={movie}/>
                    </div>
                ))} 
                </div> : null
            }
        </section>
    )
}

const mapStateToProps = state => {
    console.log('mapSTP state', state)
    return {
        movies: state.studioReducer.movies,
        isLoading: state.isLoading,
        error: state.error
    }
}

export default connect(mapStateToProps, { fetchMovies })(Studio)