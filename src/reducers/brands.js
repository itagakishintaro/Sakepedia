const brands = ( state=[], action ) => {
  switch ( action.type ) {
  case 'SETBRANDS':
    return action.brands
  default:
    return state
  }
}

export default brands
