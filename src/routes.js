import React from 'react'
import { Route, IndexRoute } from 'react-router'

import App from './components/App'
import Search from './containers/Search'
import NewSake from './containers/NewSake'

const Routes = (
  <Route path='/' component={App}>
    <IndexRoute component={Search} />
    <Route path="sake/new" component={NewSake}/>
  </Route>
);
export default Routes;
