import { combineReducers } from 'redux'
import list from './list'
import names from './names'
import breweries from './breweries'
import prefectures from './prefectures'

const app = combineReducers( {
  list, names, breweries, prefectures
} )

export default app
