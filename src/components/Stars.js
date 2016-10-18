import React, { PropTypes } from 'react'
// material-ui
import FontIcon from 'material-ui/FontIcon'
import { grey100, yellow500 } from 'material-ui/styles/colors'

class Stars extends React.Component {
  render() {
    const MAX = 5
    let stars = []
    for( let i = 0; i < Math.round( this.props.evaluation ); i++ ) {
      stars.push( <FontIcon className="material-icons" color={yellow500}>star</FontIcon> )
    }
    for( let i = 0; i < Math.round( MAX - this.props.evaluation ); i++ ) {
      stars.push( <FontIcon className="material-icons" color={grey100}>star</FontIcon> )
    }
    return ( <span>{stars}</span> )
  }
}

Stars.propTypes = {
  evaluation: PropTypes.number.isRequired,
}

export default Stars
