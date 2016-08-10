import React from 'react'
import { Route, IndexRoute } from 'react-router'

import App from './components/App'
import Search from './containers/Search'
import NewSake from './containers/NewSake'
import Detail from './containers/Detail'

const Routes = (
  <Route path='/' component={App}>
    <IndexRoute component={Search} />
    <Route path="sake/new" component={NewSake}/>
    <Route path="sake/:sakeId" component={Detail}/>
  </Route>
);
export default Routes;
