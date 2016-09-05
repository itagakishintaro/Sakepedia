import React, { PropTypes } from 'react'
// components
import ReviewCard from './ReviewCard'

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
  reviews: PropTypes.array.isRequired,
}

export default Reviews
