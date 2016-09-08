import React, { PropTypes } from 'react'
// components
import ReviewCard from './ReviewCard'

class Reviews extends React.Component{
  render() {
    let reviews = this.props.reviews
    if( !reviews ) {
      reviews = []
    }
    reviews.sort( (a, b) => {
      if (a.日時 > b.日時) { return -1 }
      if (a.日時 < b.日時) { return 1 }
      return 0
    })
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
