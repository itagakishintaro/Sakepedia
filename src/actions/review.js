import axios from 'axios'

export const setReviews = ( reviews ) => {
  return {
    type: 'SETREVIEWS',
    reviews,
  }
}

export const getReviews = ( dispatch, sakeId ) => {
  axios.get( `/api/reviews?sakeId=${sakeId}` )
    .then( res => {
      dispatch( setReviews( res.data ) )
    })
    .catch( error => {
      console.log( error )
    })
}
