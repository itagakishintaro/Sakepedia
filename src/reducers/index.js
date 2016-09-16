import { combineReducers } from 'redux'
import list from './list'
import brands from './brands'
import breweries from './breweries'
import koubos from './koubos'
import prefectures from './prefectures'
import rices from './rices'
import sake from './sake'
import auth from './auth'

const app = combineReducers( {
  list, brands, breweries, koubos, prefectures, rices, sake, auth
} )

export default app
