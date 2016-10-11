const rices = ( state=[], action ) => {
  switch ( action.type ) {
  case 'SETRICES':
    return action.rices
  default:
    return state
  }
}

export default rices
