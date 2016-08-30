const validate = ( state ) => {
  state.error = false
  validateBrand( state )
  validateCategory( state )
  validateProcess( state )
  validateBrewery( state )
  validatePrefecture( state )
  return state
}

const validateBrand = ( state ) => {
  if ( !state.brand ) {
    state.error = true
    state.errorText.brand = '銘柄は必須です'
  } else {
    state.errorText.brand = ''
  }
}

const validateCategory = ( state ) => {
  if ( !state.category ) {
    state.error = true
    state.errorText.category = '分類は必須です'
  } else {
    state.errorText.category = ''
  }
}

const validateProcess = ( state ) => {
  if ( !state.process ) {
    state.error = true
    state.errorText.process = '製法は必須です'
  } else {
    state.errorText.process = ''
  }
}

const validateBrewery = ( state ) => {
  if ( !state.brewery ) {
    state.error = true
    state.errorText.brewery = '蔵元は必須です'
  } else {
    state.errorText.brewery = ''
  }
}

const validatePrefecture = ( state ) => {
  if ( !state.prefecture ) {
    state.error = true
    state.errorText.prefecture = '都道府県は必須です'
  } else {
    state.errorText.prefecture = ''
  }
}

export default validate
