import { combineReducers } from 'redux'
import list from './list'
import brands from './brands'
import breweries from './breweries'
import sakeYeasts from './sakeYeasts'
import prefectures from './prefectures'
import rices from './rices'
import sake from './sake'
import isLogin from './isLogin'

const app = combineReducers( {
  list, brands, breweries, sakeYeasts, prefectures, rices, sake, isLogin
} )

export default app
