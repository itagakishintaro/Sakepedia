import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
// material-ui
// css
// actions
import { getReviews } from '../actions/sake'
// components

class Reviews extends React.Component{
  componentWillMount() {
    getReviews( this.props.dispatch )
  }

  render() {
    return (
      <div>
      </div>
    )
  }
}

Reviews.propTypes = {
  dispatch: PropTypes.func.isRequired,
}

const mapStateToProps = state => state
export default connect( mapStateToProps )( Reviews )
