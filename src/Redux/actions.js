import axios from 'axios'

export const SEARCH_SUCCESS = 'SEARCH_SUCCESS'
export const SEARCH_FAILED = 'SEARCH_FAILED'

export const RANDOM_SUCCESS = 'RANDOM_SUCCESS'
export const RANDOM_FAILED = 'RANDOM_FAILED'

export const submitSearch = (data, limit) => {
    return dispatch => {
        axios.get(`http://api.giphy.com/v1/gifs/search?q=${data}&api_key=${process.env.REACT_APP_API}&limit=${limit}`)
        .then(res => dispatch({
            type: SEARCH_SUCCESS,
            payload: res.data
        }))
        .catch(err => dispatch({
            type:SEARCH_FAILED,
            payload: err
        }))
    }
}

export const submitRandom = () => {
    return dispatch => {
        axios.get(`http://api.giphy.com/v1/gifs/random?api_key=${process.env.REACT_APP_API}`)
        .then(res => dispatch({
            type: RANDOM_SUCCESS,
            payload: res.data
        }))
        .catch(err => dispatch({
            type:RANDOM_FAILED,
            payload: err
        }))
    }
}