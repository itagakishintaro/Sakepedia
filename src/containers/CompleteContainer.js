import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
// actions
import { getAllBreweries } from '../actions/brewery'
import { getMyBreweries } from '../actions/sake'
// material-ui

// components
import Complete from '../components/Complete'

class CompleteContainer extends React.Component {
  constructor(props) {
    super(props)
    getAllBreweries( this.props.dispatch )
    getMyBreweries( this.props.dispatch )
  }

  render() {
    return(
        <Complete
          allBreweries = { this.props.allBreweries }
          myBreweries = { this.props.myBreweries }
        />
    )
  }
}

CompleteContainer.propTypes = {
  dispatch: PropTypes.func.isRequired,
  allBreweries: PropTypes.array.isRequired,
  myBreweries: PropTypes.array.isRequired,
}

const mapStateToProps = state => state
export default connect( mapStateToProps )( CompleteContainer )
