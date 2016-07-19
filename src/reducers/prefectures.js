const prefectures = ( state=[], action ) => {
  switch ( action.type ) {
  case 'SETPREFECTURES':
    return action.prefectures
  default:
    return state
  }
}

export default prefectures
