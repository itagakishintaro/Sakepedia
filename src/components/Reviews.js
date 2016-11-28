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
      if (a.date > b.date) { return -1 }
      if (a.date < b.date) { return 1 }
      return 0
    })
    const styles = {
      reviews: {
        display: 'flex',
        flexWrap: 'wrap',
      },
    }
    return (
      <div style={ styles.reviews }>
        { reviews.map( review => <ReviewCard review={ review } changeTab={ this.props.changeTab } setReview={this.props.setReview} />  ) }
      </div>
    )
  }
}

Reviews.propTypes = {
  changeTab: PropTypes.func.isRequired,
  setReview: PropTypes.func.isRequired,
  reviews: PropTypes.array.isRequired,
}

export default Reviews
