import React, { PropTypes } from 'react'
// components
import ReviewCard from './ReviewCard'

class Reviews extends React.Component{
  render() {
    let reviews = this.props.reviews
    if( !reviews ) {
      reviews = []
    }
    return (
      <div>
        { reviews.map( review => <ReviewCard review={ review } />  ) }
      </div>
    )
  }
}

Reviews.propTypes = {
  reviews: PropTypes.array.isRequired,
}

export default Reviews
