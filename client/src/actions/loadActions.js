import { 
  LOADING,
  DONE_LOADING
} from './types'

const loaderWrapper = document.querySelector('.loaderWrapper')

export const loading = () => (dispatch, state) => {
  document.body.style.overflow = 'hidden'
  loaderWrapper.classList.remove('hide')
  dispatch({ type: LOADING })
}

export const doneLoading = () => (dispatch, state) => {
  document.body.style.overflow = 'visible'
  loaderWrapper.classList.add('hide')
  dispatch({ type: DONE_LOADING })
}