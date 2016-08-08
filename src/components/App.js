import React from 'react'
import Header from '../containers/Header'

const App = React.createClass({
  propTypes: {
    children: React.PropTypes.element.isRequired
  },

  render() {
    return (
      <div>
        <Header />

        {/* add this */}
        {this.props.children}

      </div>
    )
  }
})

export default App
