import {
    SEARCH_SUCCESS,
    SEARCH_FAILED
   } from '../actions'
   
     const initialState = []
   
     export default (state = initialState, action) => {
       switch(action.type) {
         case SEARCH_SUCCESS:
           return action.payload.data
         case SEARCH_FAILED:
           return action.payload
         default:
           return state
       }
     }
   