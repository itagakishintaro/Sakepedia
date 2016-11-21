const shoplist = ( state=[], action ) => {
  switch ( action.type ) {
  case 'SETSHOPLIST':
    return action.shoplist
  default:
    return state
  }
}

export default shoplist
