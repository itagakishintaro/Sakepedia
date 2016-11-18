import { combineReducers } from 'redux'
import list from './list'
import mylist from './mylist'
import brands from './brands'
import breweries from './breweries'
import sakeYeasts from './sakeYeasts'
import prefectures from './prefectures'
import rices from './rices'
import sake from './sake'
import isLogin from './isLogin'
import glossary from './glossary'

const app = combineReducers( {
  list, mylist, brands, breweries, sakeYeasts, prefectures, rices, sake, isLogin, glossary
} )

export default app
