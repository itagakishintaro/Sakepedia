const sake = ( state={}, action ) => {
  switch ( action.type ) {
  case 'SETSAKE':
    return action.sake
  default:
    return state
  }
}

export default sake
