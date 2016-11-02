import axios from 'axios'

export const setSakeList = ( list ) => {
  return {
    type: 'SETLIST',
    list,
  }
}

export const setSake = ( sake ) => {
  return {
    type: 'SETSAKE',
    sake,
  }
}

export const setBrands = ( brands ) => {
  return {
    type: 'SETBRANDS',
    brands,
  }
}

export const setBreweries = ( breweries ) => {
  return {
    type: 'SETBREWERIES',
    breweries,
  }
}

export const setSakeYeasts = ( sakeYeasts ) => {
  return {
    type: 'SETKOUBOS',
    sakeYeasts,
  }
}

export const setRices = ( rices ) => {
  return {
    type: 'SETRICES',
    rices,
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

export const getSakeList = ( dispatch, words ) => {
  let query = 'action=search'
  if( words.prefecture ) {
    query = `${query}&prefecture=${encodeURIComponent(words.prefecture)}`
  }
  if( words.brewrey ) {
    query = `${query}&brewrey=${encodeURIComponent(words.brewrey)}`
  }
  if( words.brand ) {
    query = `${query}&brand=${encodeURIComponent(words.brand)}`
  }
  let url = `/api/sakes?${query}`
  axios.get( url )
    .then( res => {
      dispatch( setSakeList( res.data ) )
    })
    .catch( error => {
      handleCashe(url, ( data ) => { dispatch( setSakeList( data ) ) })
    })
}

export const getSake = ( dispatch, id ) => {
  let url = `/api/sakes/${id}`
  axios.get( url )
    .then( res => {
      dispatch( setSake( res.data ) )
    })
    .catch( error => {
      handleCashe(url, ( data ) => { dispatch( setSake( data ) ) })
    })
}

export const getBrands = ( dispatch ) => {
  let url = '/api/sakes/brands'
  axios.get( url )
    .then( res => {
      dispatch( setBrands( res.data ) )
    })
    .catch( error => {
      handleCashe(url, ( data ) => { dispatch( setBrands( data ) ) })
    })
}

export const getBreweries = ( dispatch ) => {
  let url = '/api/sakes/breweries'
  axios.get( url )
    .then( res => {
      dispatch( setBreweries( res.data ) )
    })
    .catch( error => {
      handleCashe(url, ( data ) => { dispatch( setBreweries( data ) ) })
    })
}

export const getSakeYeasts = ( dispatch ) => {
  let url = '/api/sakes/sakeYeasts'
  axios.get( url )
    .then( res => {
      dispatch( setSakeYeasts( res.data ) )
    })
    .catch( error => {
      handleCashe(url, ( data ) => { dispatch( setSakeYeasts( data ) ) })
    })
}

export const getRices = ( dispatch ) => {
  let url = '/api/sakes/rices'
  axios.get( url )
    .then( res => {
      dispatch( setRices( res.data ) )
    })
    .catch( error => {
      handleCashe(url, ( data ) => { dispatch( setRices( data ) ) })
    })
}
