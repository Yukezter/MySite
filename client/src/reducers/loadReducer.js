import { 
  LOADING,
  DONE_LOADING,
  } from '../actions/types'
  
  const initialState = {
    loading: true,
  }
  
  export default function(state = initialState, action) {
    switch (action.type) {
      case LOADING:
        return {
          loading: true
        }
      case DONE_LOADING:
        return {
          loading: false
        }
      default:
        return state
    }
  }