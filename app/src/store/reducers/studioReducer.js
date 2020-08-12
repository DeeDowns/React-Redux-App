import { FETCH_MOVIES_START, FETCH_MOVIES_SUCCESS } from '../actions'

const initialState = {
    movies: [],
    isLoading: false,
    error: ''
}

export const studioReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_MOVIES_START: 
            return {
                ...state,
                isLoading: true,
                error: ''
            }
        default: 
        return state

    }
}