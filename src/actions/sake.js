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
  axios.get( `/api/sakes?${query}` )
    .then( res => {
      dispatch( setSakeList( res.data ) )
    })
    .catch( error => {
      console.log( error )
    })
}

export const getSake = ( dispatch, id ) => {
  axios.get( `/api/sakes/${id}` )
    .then( res => {
      dispatch( setSake( res.data ) )
    })
    .catch( error => {
      console.log( error )
    })
}

export const getBrands = ( dispatch ) => {
  axios.get( '/api/sakes/brands' )
    .then( res => {
      dispatch( setBrands( res.data ) )
    })
    .catch( error => {
      console.log( error )
    })
}

export const getBreweries = ( dispatch ) => {
  axios.get( '/api/sakes/breweries' )
    .then( res => {
      dispatch( setBreweries( res.data ) )
    })
    .catch( error => {
      console.log( error )
    })
}

export const getSakeYeasts = ( dispatch ) => {
  axios.get( '/api/sakes/sakeYeasts' )
    .then( res => {
      dispatch( setSakeYeasts( res.data ) )
    })
    .catch( error => {
      console.log( error )
    })
}

export const getRices = ( dispatch ) => {
  axios.get( '/api/sakes/rices' )
    .then( res => {
      dispatch( setRices( res.data ) )
    })
    .catch( error => {
      console.log( error )
    })
}
