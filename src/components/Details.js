import React, { PropTypes } from 'react'
import Chip from 'material-ui/Chip'

const styles = {
  chip: {
    height: '1.2em',
  },
  label: {
    lineHeight: '1.2em',
  }
}
const Details = ( { sake } ) => (
  <div>
    { Object.keys(sake).map( key => <div><Chip style={ styles.chip } labelStyle={ styles.label }>{ key }</Chip><p>{ sake[key] }</p></div>  ) }
  </div>
)

Details.propTypes = {
  sake: PropTypes.object.isRequired,
}

export default Details
