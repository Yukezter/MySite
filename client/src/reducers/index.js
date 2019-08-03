import { combineReducers } from 'redux'
import loadReducer from './loadReducer'
import mobileNavReducer from './mobileNavReducer'

export default combineReducers({
    load: loadReducer,
    mobileNav: mobileNavReducer
})