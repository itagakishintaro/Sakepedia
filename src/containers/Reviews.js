import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
// material-ui
// css
// actions
import { getReviews } from '../actions/review'
// components
import ReviewCard from '../components/ReviewCard'

class Reviews extends React.Component{
  render() {
    if ( this.props.sakeId && this.props.reviews !== undefined ) {
      getReviews( this.props.dispatch, this.props.sakeId )
    }
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
