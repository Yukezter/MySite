import { 
  OPEN,
  CLOSE
  } from '../actions/types'
  
  const initialState = {
    open: false,
  }
  
  export default function(state = initialState, action) {
    switch (action.type) {
      case OPEN:
        return {
          open: true
        }
      case CLOSE:
        return {
          open: false
        }
      default:
        return state
    }
  }