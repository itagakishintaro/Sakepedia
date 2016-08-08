import axios from 'axios'

export const setSakeList = ( list ) => {
  return {
    type: 'SETLIST',
    list,
  }
}

export const setNames = ( names ) => {
  return {
    type: 'SETNAMES',
    names,
  }
}

export const setBreweries = ( breweries ) => {
  return {
    type: 'SETBREWERIES',
    breweries,
  }
}

export const setPrefectures = ( prefectures ) => {
  return {
    type: 'SETPREFECTURES',
    prefectures,
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
  axios.get( `/api/sake/find?${query}` )
    .then( res => {
      dispatch( setSakeList( res.data ) )
    })
    .catch( error => {
      console.log( error )
    })
}

export const getNames = ( dispatch ) => {
  axios.get( '/api/sake/names/find' )
    .then( res => {
      dispatch( setNames( res.data ) )
    })
    .catch( error => {
      console.log( error )
    })
}

export const getBreweries = ( dispatch ) => {
  axios.get( '/api/sake/breweries/find' )
    .then( res => {
      dispatch( setBreweries( res.data ) )
    })
    .catch( error => {
      console.log( error )
    })
}

export const getPrefectures = ( dispatch ) => {
  axios.get( '/api/sake/prefectures/find' )
    .then( res => {
      dispatch( setPrefectures( res.data ) )
    })
    .catch( error => {
      console.log( error )
    })
}
