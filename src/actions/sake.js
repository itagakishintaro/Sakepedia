import axios from 'axios'

export const setSakeList = ( list ) => {
  return {
    type: 'SETLIST',
    list,
  }
}

export const setMySakeList = ( list ) => {
  return {
    type: 'SETMYLIST',
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

export const setMyBreweries = ( breweries ) => {
  return {
    type: 'SETMYBREWERIES',
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
  document.getElementById('loading').style.display = 'block'
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
      document.getElementById('loading').style.display = 'none'
    })
    .catch( error => {
      handleCashe(url, ( data ) => { dispatch( setSakeList( data ) ) })
      document.getElementById('loading').style.display = 'none'
    })
}

export const getMySakeList = ( dispatch, words ) => {
  document.getElementById('loading').style.display = 'block'
  if( !words['reviews.userid'] ) {
    return
  }

  let query = 'action=search'
  query = `${query}&reviews.userid=${encodeURIComponent(words['reviews.userid'])}`
  if( words.from ) {
    query = `${query}&from=${encodeURIComponent(words.from)}`
  }
  if( words.to ) {
    query = `${query}&to=${encodeURIComponent(words.to)}`
  }
  let url = `/api/sakes?${query}`
  axios.get( url )
    .then( res => {
      dispatch( setMySakeList( res.data ) )
      document.getElementById('loading').style.display = 'none'
    })
    .catch( error => {
      handleCashe(url, ( data ) => { dispatch( setMySakeList( data ) ) })
      document.getElementById('loading').style.display = 'none'
    })
}

export const getSake = ( dispatch, id ) => {
  document.getElementById('loading').style.display = 'block'
  let url = `/api/sakes/${id}`
  axios.get( url )
    .then( res => {
      dispatch( setSake( res.data ) )
      document.getElementById('loading').style.display = 'none'
    })
    .catch( error => {
      handleCashe(url, ( data ) => { dispatch( setSake( data ) ) })
      document.getElementById('loading').style.display = 'none'
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

export const getMyBreweries = ( dispatch, userid ) => {
  document.getElementById('loading').style.display = 'block'
  let url = `/api/sakes/mybreweries?reviews.userid=${encodeURIComponent( userid )}`
  axios.get( url )
    .then( res => {
      dispatch( setMyBreweries( res.data ) )
      document.getElementById('loading').style.display = 'none'
    })
    .catch( error => {
      handleCashe(url, ( data ) => { dispatch( setMyBreweries( data ) ) })
      document.getElementById('loading').style.display = 'none'
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
