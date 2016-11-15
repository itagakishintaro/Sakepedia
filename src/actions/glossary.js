import axios from 'axios'

export const setGlossary = ( glossary ) => {
  return {
    type: 'SETGLOSSARY',
    glossary,
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

export const getGlossary = ( dispatch ) => {
  let url = '/api/glossary'
  axios.get( url )
    .then( res => {
      dispatch( setGlossary( res.data ) )
    })
    .catch( error => {
      handleCashe(url, ( data ) => { dispatch( setGlossary( data ) ) })
    })
}
