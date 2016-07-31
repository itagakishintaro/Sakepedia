import React from 'react'
import { Route, IndexRoute } from 'react-router'

import App from './components/App'
import Search from './containers/Search'
import New from './containers/New'

const Routes = (
  <Route path='/' component={App}>
    <IndexRoute component={Search} />
    <Route path="new" component={New}/>
  </Route>
);
export default Routes;
