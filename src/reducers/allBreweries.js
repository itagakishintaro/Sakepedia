const allBreweries = ( state=[], action ) => {
  switch ( action.type ) {
  case 'SETALLBREWERIES':
    return action.breweries
  default:
    return state
  }
}

export default allBreweries
