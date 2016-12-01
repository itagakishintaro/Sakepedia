import axios from 'axios'

export const setAllBreweries = ( breweries ) => {
  return {
    type: 'SETALLBREWERIES',
    breweries,
  }
}

const handleCashe = ( url, func ) => {
  if ( 'caches' in window ) {
    caches.match( url ).then( response => {
      if ( response ) {
        response.json().then( json => {
          console.log( 'get from cache' )
          func( json )
        })
      }
    })
  }
}

export const getAllBreweries = ( dispatch ) => {
  let url = '/api/breweries'
  axios.get( url )
    .then( res => {
      dispatch( setAllBreweries( res.data ) )
    })
    .catch( error => {
      handleCashe(url, ( data ) => { dispatch( setAllBreweries( data ) ) })
    })
}
