import React from 'react'
import { Route, IndexRoute } from 'react-router'

import App from './components/App'
import List from './containers/List'

const Routes = (
  <Route path='/' component={App}>
    <IndexRoute component={List} />
  </Route>
);
export default Routes;
