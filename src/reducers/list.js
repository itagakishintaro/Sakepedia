const list = ( state=[], action ) => {
  switch ( action.type ) {
  case 'SETLIST':
    return action.list
  default:
    return state
  }
}

export default list
