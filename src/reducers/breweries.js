const breweries = ( state=[], action ) => {
  switch ( action.type ) {
  case 'SETBREWERIES':
    return action.breweries
  default:
    return state
  }
}

export default breweries
