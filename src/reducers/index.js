import { combineReducers } from 'redux'
import list from './list'
import brands from './brands'
import breweries from './breweries'
import koubos from './koubos'
import prefectures from './prefectures'
import rices from './rices'
import sake from './sake'
import reviews from './reviews'

const app = combineReducers( {
  list, brands, breweries, koubos, prefectures, rices, sake, reviews
} )

export default app
