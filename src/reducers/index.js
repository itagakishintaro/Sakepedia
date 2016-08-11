import { combineReducers } from 'redux'
import list from './list'
import names from './names'
import breweries from './breweries'
import prefectures from './prefectures'
import sake from './sake'
import reviews from './reviews'

const app = combineReducers( {
  list, names, breweries, prefectures, sake, reviews
} )

export default app
