const validate = ( state ) => {
  state.error = false
  validateEvaluation( state )
  validateComment( state )
  validateFlavor( state )
  validateTaste( state )
  validateMaturation( state )
  return state
}

const validateEvaluation = ( state ) => {
  if ( !state.evaluation ) {
    state.error = true
    state.errorText.evaluation = '評価は必須です'
  } else {
    state.errorText.evaluation = ''
  }
}

const validateComment = ( state ) => {
  if ( !document.getElementById('comment').validity.valid ) {
    state.error = true
    state.errorText.comment = '香味は必須です'
  } else {
    state.errorText.comment = ''
  }
}

const validateFlavor = ( state ) => {
  if ( !state.flavor ) {
    state.error = true
    state.errorText.flavor = '香りは必須です'
  } else {
    state.errorText.flavor = ''
  }
}

const validateTaste = ( state ) => {
  if ( !state.taste ) {
    state.error = true
    state.errorText.taste = '味は必須です'
  } else {
    state.errorText.taste = ''
  }
}

const validateMaturation = ( state ) => {
  if ( !state.maturation ) {
    state.error = true
    state.errorText.maturation = '熟成は必須です'
  } else {
    state.errorText.maturation = ''
  }
}

export default validate
