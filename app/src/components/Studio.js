import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { fetchMovies } from '../store/actions/studioActions'
import StudioCard from './StudioCard'
import {Card, CardBody, CardHeader, CardDeck, Spinner} from 'reactstrap'
import '../styles/Studio.css'


const Studio = props => {
    console.log('Studio props', props)

    useEffect(() => {
        props.fetchMovies()
    }, [])

    return (
        <section>
            <h1>Studio Ghibli Movies</h1>
            {props.isLoading ? <h4>Loading movies...</h4> : null}
            {props.error ? <h4 style={{ color: 'orange'}}>oops something went wrong... {props.error}</h4> : null}
            {props.movies.length > 0 ?    
                <div className='movie-cards'>
                {props.movies.map( movie => (
                    <CardDeck>
                        <Card inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
                            <CardHeader>{movie.title}</CardHeader>
                            <CardBody>
                                <StudioCard key={movie.id} movieData={movie}/>
                            </CardBody>
                        </Card>
                    </CardDeck>
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
        error: state.studioReducer.error
    }
}

export default connect(mapStateToProps, { fetchMovies })(Studio)