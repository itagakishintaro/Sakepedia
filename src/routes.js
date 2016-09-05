import React from 'react'
import { Route, IndexRoute } from 'react-router'

import App from './components/App'
import DetailContainer from './containers/DetailContainer'
import NewSake from './components/NewSake'
import SearchContainer from './containers/SearchContainer'

const Routes = (
  <Route path='/' component={App}>
    <IndexRoute component={SearchContainer} />
    <Route path="sake/new" component={NewSake}/>
    <Route path="sake/:sakeId" component={DetailContainer}/>
  </Route>
);
export default Routes;
