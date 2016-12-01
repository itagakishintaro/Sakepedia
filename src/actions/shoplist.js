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
  document.getElementById('loading').style.display = 'block'
  let url = '/api/shoplist'
  axios.get( url )
    .then( res => {
      dispatch( setShoplist( res.data ) )
      document.getElementById('loading').style.display = 'none'
    })
    .catch( error => {
      handleCashe(url, ( data ) => { dispatch( setShoplist( data ) ) })
      document.getElementById('loading').style.display = 'none'
    })
}
