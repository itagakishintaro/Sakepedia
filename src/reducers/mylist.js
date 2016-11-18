const mylist = ( state=[], action ) => {
  switch ( action.type ) {
  case 'SETMYLIST':
    return action.list
  default:
    return state
  }
}

export default mylist
