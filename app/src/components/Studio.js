import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchMovies } from '../store/actions/studioActions'


const Studio = props => {
    console.log('Studio props', props)

    useEffect(() => {
        props.fetchMovies()
    }, [])

    return (
        <section>
            <h1>Studio Ghibli Movies</h1>
            {
                props.isLoading ? <h4>Loading movies...</h4> : null
            }
            {
                props.error ? <h4 style={{ color: 'orange'}}>oops something went wrong... {props.error}</h4> : null
            }
            {
                props.movies.length > 0 ? (
                    <div>
                       {props.movies.map((movie) => (
                           <h2 key={movie.id}>{movie.title}</h2>
                       ))} 
                    </div>
                ) : null
            }
        </section>
    )
}

const mapStateToProps = state => {
    console.log('mapSTP state', state)
    return {
        movies: state.studioReducer.movies,
        isLoading: state.studioReducer.isLoading,
        error: state.studioReducer.error
    }
}

export default connect(mapStateToProps, { fetchMovies })(Studio)