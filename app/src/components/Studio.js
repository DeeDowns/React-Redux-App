import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchMovies } from '../store/actions/studioActions'


const Studio = props => {
    useEffect(() => {

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
        </section>
    )
}

const mapStateToProps = state => {
    console.log(state)
    return {
        movies: state.movies,
        isLoading: state.isLoading,
        error: state.error
    }
}

export default connect(mapStateToProps, {})(Studio)