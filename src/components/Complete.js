import React, { PropTypes } from 'react'
// material-ui

// util

class Complete extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    console.log('ALL_BREWERIES: ', this.props.allBreweries)
    console.log('MY_BREWERIES: ', this.props.myBreweries)
    return (
      <div>
      test
      </div>
    )
  }
}

Complete.propTypes = {
  allBreweries: PropTypes.array.isRequired,
  myBreweries: PropTypes.array.isRequired,
}

export default Complete
