import { combineReducers } from 'redux'
import SearchReducer from './SearchReducer'
import RandomReducer from './RandomReducer'

export default combineReducers({
    search_result: SearchReducer,
    random_result: RandomReducer
})