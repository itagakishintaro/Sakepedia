const glossary = ( state=[], action ) => {
  switch ( action.type ) {
  case 'SETGLOSSARY':
    return action.glossary
  default:
    return state
  }
}

export default glossary
