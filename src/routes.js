import React from 'react'
import { Route, IndexRoute } from 'react-router'

import App from './components/App'
import Search from './containers/Search'

const Routes = (
  <Route path='/' component={App}>
    <IndexRoute component={Search} />
  </Route>
);
export default Routes;
