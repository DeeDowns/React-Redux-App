import axios from 'axios'

export const FETCH_MOVIES_START = 'FETCH_MOVIES_START'
export const FETCH_MOVIES_SUCCESS = 'FETCH_MOVIES_SUCCESS'

export const fetchMovies = () => (dispatch) => {
    dispatch({ type: FETCH_MOVIES_START })
    axios
        .get('https://ghibliapi.herokuapp.com/films')
        .then(res => {
            dispatch({ type: FETCH_MOVIES_SUCCESS, payload: res.data})
        })
        .catch(err => console.log(err))
}

