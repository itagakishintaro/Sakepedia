const auth = ( state=false, action ) => {
  switch ( action.type ) {
  case 'SET_AUTH_STATUS':
    return action
  default:
    return state
  }
}

export default auth
