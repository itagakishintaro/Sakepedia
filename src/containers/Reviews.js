import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
// material-ui
// css
// components
import ReviewCard from '../components/ReviewCard'

class Reviews extends React.Component{
  render() {
    return (
      <div>
        { this.props.reviews.map( review => <ReviewCard review={review} /> ) }
      </div>
    )
  }
}

Reviews.propTypes = {
  dispatch: PropTypes.func.isRequired,
  reviews: PropTypes.array.isRequired,
  sakeId: PropTypes.string.isRequired,
}

const mapStateToProps = state => state
export default connect( mapStateToProps )( Reviews )
