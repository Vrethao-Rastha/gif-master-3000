import {
    RANDOM_SUCCESS,
    RANDOM_FAILED
   } from '../actions'
   
     const initialState = []
   
     export default (state = initialState, action) => {
       switch(action.type) {
         case RANDOM_SUCCESS:
           return [...action.payload]
         case RANDOM_FAILED:
           return action.payload
         default:
           return state
       }
     }
   