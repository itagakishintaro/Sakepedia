let React = require('react')
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import app from './reducers'
// for react-router
import { Router, hashHistory } from 'react-router'
import routes from './routes.js'
// for material-ui
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import injectTapEventPlugin from 'react-tap-event-plugin'
injectTapEventPlugin()
// for async process
import thunk from 'redux-thunk'

let store = createStore(
  app,
  applyMiddleware(thunk)
)

// store.subscribe( () =>
//    console.log( store.getState() )
// )

render(
  <MuiThemeProvider>
    <Provider store={store}>
      <Router children={routes} history={hashHistory} />
    </Provider>
  </MuiThemeProvider>,
  document.getElementById('root')
)
