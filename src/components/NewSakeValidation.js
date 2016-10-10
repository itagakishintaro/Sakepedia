const validate = ( state ) => {
  state.error = false
  validateBrand( state )
  validateCategory( state )
  validateBrewery( state )
  validatePrefecture( state )
  validateUrl( state )
  validatePolishRate( state )
  validateSakeRate( state )
  validateAlcoholRate( state )
  validateAcidRate( state )
  validateAminoRate( state )
  return state
}

const validateBrand = ( state ) => {
  if ( !document.getElementById('brand').validity.valid ) {
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
  if (  !document.getElementById('brewery').validity.valid  ) {
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

const validateUrl = ( state ) => {
  if ( !document.getElementById('url').validity.valid ) {
    state.error = true
    state.errorText.url = 'URLのフォーマットにしてください'
  } else {
    state.errorText.url = ''
  }
}

const validatePolishRate = ( state ) => {
  if ( !document.getElementById('polishRate').validity.valid ) {
    state.error = true
    state.errorText.polishRate = '数値を入力してください'
  } else {
    state.errorText.polishRate = ''
  }
}

const validateAlcoholRate = ( state ) => {
  if ( !document.getElementById('alcoholRate').validity.valid ) {
    state.error = true
    state.errorText.alcoholRate = '数値を入力してください'
  } else {
    state.errorText.alcoholRate = ''
  }
}

const validateSakeRate = ( state ) => {
  if ( !document.getElementById('sakeRate').validity.valid ) {
    state.error = true
    state.errorText.sakeRate = '数値を入力してください'
  } else {
    state.errorText.sakeRate = ''
  }
}

const validateAcidRate = ( state ) => {
  if ( !document.getElementById('acidRate').validity.valid ) {
    state.error = true
    state.errorText.acidRate = '数値を入力してください'
  } else {
    state.errorText.acidRate = ''
  }
}

const validateAminoRate = ( state ) => {
  if ( !document.getElementById('aminoRate').validity.valid ) {
    state.error = true
    state.errorText.aminoRate = '数値を入力してください'
  } else {
    state.errorText.aminoRate = ''
  }
}

export default validate
