import axios from 'axios'

export const setSakeList = ( list ) => {
  return {
    type: 'SETLIST',
    list: list,
  }
}

export const getSakeList = ( dispatch, words ) => {
  let query = 'action=search'
  if( words.prefecture ) {
    query = `${query}&prefecture=${words.prefecture}`
  }
  if( words.brewrey ) {
    query = `${query}&brewrey=${words.brewrey}`
  }
  if( words.name ) {
    query = `${query}&name=${words.name}`
  }
  console.log('axios.get: ', `/api/find?${query}`)
  axios.get( `/api/find?${query}` )
    .then( response => {
      console.log( response.data )
      dispatch( setSakeList( response.data ) )
    })
    .catch( error => {
      console.log( error )
    })
}
