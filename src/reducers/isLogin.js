const isLogin = ( state=false, action ) => {
  switch ( action.type ) {
  case 'SET_AUTH_STATUS':
    return action.isLogin
  default:
    return state
  }
}

export default isLogin
