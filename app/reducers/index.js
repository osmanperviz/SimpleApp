import { combineReducers } from 'redux'
import * ss recipesReducers from './recipes'

export default combineReducers(Object.assign(
  recipesReducers
))
