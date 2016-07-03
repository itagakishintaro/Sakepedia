import axios from 'axios'

export const setSakeList = ( list ) => {
  return {
    type: 'SETLIST',
    list: list
  }
}

export const getSakeList = ( dispatch ) => {
  axios.get( '/api' )
    .then( response => {
      console.log( response.data )
      dispatch( setSakeList( response.data ) )
    })
    .catch( error => {
      console.log( error )
    })
}
