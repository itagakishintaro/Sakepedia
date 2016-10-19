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

const handleCashe = ( url, hasRequestPending, func ) => {
  if ( 'caches' in window ) {
    caches.match( url ).then( response => {
      if ( response ) {
        response.json().then( json => {
          // Only update if the XHR is still pending, otherwise the XHR
          // has already returned and provided the latest data.
          if ( hasRequestPending ) {
            console.log( 'get from cache' )
            func( json )
          }
        })
      }
    })
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
  if( words.brand ) {
    query = `${query}&brand=${words.brand}`
  }
  let url = `/api/sakes?${query}`

  let hasRequestPending = true
  handleCashe(url, hasRequestPending, ( data ) => { dispatch( setSakeList( data ) ) })

  axios.get( url )
    .then( res => {
      hasRequestPending = false
      dispatch( setSakeList( res.data ) )
    })
    .catch( error => {
      console.log( error )
    })
}

export const getSake = ( dispatch, id ) => {
  let url = `/api/sakes/${id}`
  let hasRequestPending = true
  handleCashe(url, hasRequestPending, ( data ) => { dispatch( setSake( data ) ) })
  axios.get( url )
    .then( res => {
      hasRequestPending = false
      dispatch( setSake( res.data ) )
    })
    .catch( error => {
      console.log( error )
    })
}

export const getBrands = ( dispatch ) => {
  let url = '/api/sakes/brands'
  let hasRequestPending = true
  handleCashe(url, hasRequestPending, ( data ) => { dispatch( setBrands( data ) ) })
  axios.get( url )
    .then( res => {
      hasRequestPending = false
      dispatch( setBrands( res.data ) )
    })
    .catch( error => {
      console.log( error )
    })
}

export const getBreweries = ( dispatch ) => {
  let url = '/api/sakes/breweries'
  let hasRequestPending = true
  handleCashe(url, hasRequestPending, ( data ) => { dispatch( setBreweries( data ) ) })
  axios.get( url )
    .then( res => {
      hasRequestPending = false
      dispatch( setBreweries( res.data ) )
    })
    .catch( error => {
      console.log( error )
    })
}

export const getSakeYeasts = ( dispatch ) => {
  let url = '/api/sakes/sakeYeasts'
  let hasRequestPending = true
  handleCashe(url, hasRequestPending, ( data ) => { dispatch( setSakeYeasts( data ) ) })
  axios.get( url )
    .then( res => {
      hasRequestPending = false
      dispatch( setSakeYeasts( res.data ) )
    })
    .catch( error => {
      console.log( error )
    })
}

export const getRices = ( dispatch ) => {
  let url = '/api/sakes/rices'
  let hasRequestPending = true
  handleCashe(url, hasRequestPending, ( data ) => { dispatch( setRices( data ) ) })
  axios.get( url )
    .then( res => {
      hasRequestPending = false
      dispatch( setRices( res.data ) )
    })
    .catch( error => {
      console.log( error )
    })
}
