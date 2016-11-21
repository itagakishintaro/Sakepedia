import axios from 'axios'

export const setShoplist = ( shoplist ) => {
  return {
    type: 'SETSHOPLIST',
    shoplist,
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

export const getShoplist = ( dispatch ) => {
  let url = '/api/shoplist'
  axios.get( url )
    .then( res => {
      dispatch( setShoplist( res.data ) )
    })
    .catch( error => {
      handleCashe(url, ( data ) => { dispatch( setShoplist( data ) ) })
    })
}
