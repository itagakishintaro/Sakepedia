const validate = ( state ) => {
  state.error = false
  validateBrand( state )
  validateType( state )
  validateBrewery( state )
  validatePrefecture( state )
  validateUrl( state )
  validateRicePolishingRate( state )
  validateSakeMeterValue( state )
  validateAlcoholContent( state )
  validateAcidity( state )
  validateAminoAcidContent( state )
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

const validateType = ( state ) => {
  if ( !state.type ) {
    state.error = true
    state.errorText.type = '分類は必須です'
  } else {
    state.errorText.type = ''
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

const validateRicePolishingRate = ( state ) => {
  if ( !document.getElementById('ricePolishingRate').validity.valid ) {
    state.error = true
    state.errorText.ricePolishingRate = '数値を入力してください'
  } else {
    state.errorText.ricePolishingRate = ''
  }
}

const validateAlcoholContent = ( state ) => {
  if ( !document.getElementById('alcoholContent').validity.valid ) {
    state.error = true
    state.errorText.alcoholContent = '数値を入力してください'
  } else {
    state.errorText.alcoholContent = ''
  }
}

const validateSakeMeterValue = ( state ) => {
  if ( !document.getElementById('sakeMeterValue').validity.valid ) {
    state.error = true
    state.errorText.sakeMeterValue = '数値を入力してください'
  } else {
    state.errorText.sakeMeterValue = ''
  }
}

const validateAcidity = ( state ) => {
  if ( !document.getElementById('acidity').validity.valid ) {
    state.error = true
    state.errorText.acidity = '数値を入力してください'
  } else {
    state.errorText.acidity = ''
  }
}

const validateAminoAcidContent = ( state ) => {
  if ( !document.getElementById('aminoAcidContent').validity.valid ) {
    state.error = true
    state.errorText.aminoAcidContent = '数値を入力してください'
  } else {
    state.errorText.aminoAcidContent = ''
  }
}

export default validate
