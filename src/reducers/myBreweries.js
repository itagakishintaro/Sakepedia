const myBreweries = ( state=[], action ) => {
  switch ( action.type ) {
  case 'SETMYBREWERIES':
    return action.breweries
  default:
    return state
  }
}

export default myBreweries
