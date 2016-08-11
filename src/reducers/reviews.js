const reviews = ( state=[], action ) => {
  switch ( action.type ) {
  case 'SETREVIEWS':
    return action.reviews
  default:
    return state
  }
}

export default reviews
