import { 
  OPEN,
  CLOSE
} from './types'

export const open = () => (dispatch, state) => {
  dispatch({ type: OPEN })
}

export const close = () => (dispatch, state) => {
  dispatch({ type: CLOSE })
}