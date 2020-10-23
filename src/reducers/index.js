/* eslint-disable linebreak-style */
import { combineReducers } from 'redux'
import introductionReducer from './introduction'
import postReducer from './posts'

export default combineReducers({
  introductionReducer,
  postReducer,
})
