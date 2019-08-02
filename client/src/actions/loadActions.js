import { 
  LOADING,
  DONE_LOADING
} from './types'

const loaderWrapper = document.querySelector('.loaderWrapper')

export const loading = () => (dispatch, state) => {
  console.log('Loading...')
  document.body.style.overflow = 'hidden'
  loaderWrapper.classList.remove('hide')
  dispatch({ type: LOADING })
}

export const doneLoading = () => (dispatch, state) => {
  console.log('Done loading...')
  document.body.style.overflow = 'visible'
  loaderWrapper.classList.add('hide')
  dispatch({ type: DONE_LOADING })
}