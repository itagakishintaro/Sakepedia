const sakeYeasts = ( state=[], action ) => {
  switch ( action.type ) {
  case 'SETKOUBOS':
    return action.sakeYeasts
  default:
    return state
  }
}

export default sakeYeasts
