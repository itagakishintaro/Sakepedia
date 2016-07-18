import axios from 'axios'

export const setSakeList = ( list ) => {
  return {
    type: 'SETLIST',
    list: list,
  }
}

export const getSakeList = ( dispatch, chosen ) => {
  axios.get( `/api/find?key=${chosen}` )
    .then( response => {
      console.log( response.data )
      dispatch( setSakeList( response.data ) )
    })
    .catch( error => {
      console.log( error )
    })
}
