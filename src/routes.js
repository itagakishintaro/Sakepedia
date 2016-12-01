import React from 'react'
import { Route, IndexRoute } from 'react-router'

import App from './containers/App'
import DetailContainer from './containers/DetailContainer'
import NewSakeContainer from './containers/NewSakeContainer'
import SearchContainer from './containers/SearchContainer'
import Login from './components/Login'
import GlossaryContainer from './containers/GlossaryContainer'
import ShoplistContainer from './containers/ShoplistContainer'
import MypageContainer from './containers/MypageContainer'
import CompleteContainer from './containers/CompleteContainer'

const Routes = (
  <Route path='/' component={App}>
    <IndexRoute component={SearchContainer} />
    <Route path="sake/new" component={NewSakeContainer}/>
    <Route path="sake/:sakeId" component={DetailContainer}/>
    <Route path="login" component={Login}/>
    <Route path="glossary" component={GlossaryContainer}/>
    <Route path="shoplist" component={ShoplistContainer}/>
    <Route path="mypage" component={MypageContainer}/>
    <Route path="complete" component={CompleteContainer}/>
  </Route>
);
export default Routes;
