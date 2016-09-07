const koubos = ( state=[], action ) => {
  switch ( action.type ) {
  case 'SETKOUBOS':
    return action.koubos
  default:
    return state
  }
}

export default koubos
