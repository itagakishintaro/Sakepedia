const names = ( state=[], action ) => {
  switch ( action.type ) {
  case 'SETNAMES':
    return action.names
  default:
    return state
  }
}

export default names
