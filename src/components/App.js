import React from 'react'
// css
import classes from '../../public/stylesheets/scss/app.scss'
// components
import Header from '../containers/Header'

const App = React.createClass({
  propTypes: {
    children: React.PropTypes.element.isRequired
  },

  render() {
    return (
      <div className={classes.content}>
        <Header />

        {/* add this */}
        {this.props.children}

      </div>
    )
  }
})

export default App
