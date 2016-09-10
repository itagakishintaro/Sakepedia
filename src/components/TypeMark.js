import React, { PropTypes } from 'react'
// material-ui
import Chip from 'material-ui/Chip'
import { blue200, brown200, green200, orange200, purple200 } from 'material-ui/styles/colors'

class TypeMark extends React.Component {
  judgeType( review ) {
    if( !(review.香り && review.味 && review.熟成) ) {
      return ''
    }
    if( review.香り <= 2 & review.味 <= 2 ){
      return <Chip backgroundColor={blue200}>爽酒</Chip>
    }
    if( review.香り <= 2 & 2 <= review.味 ){
      return <Chip backgroundColor={orange200}>醇酒</Chip>
    }
    if( 2 <= review.香り & review.味 <= 2 ){
      return <Chip backgroundColor={green200}>薫酒</Chip>
    }
    if( 2 <= review.香り & 2 <= review.味 &  2 <= review.熟成 ){
      return <Chip backgroundColor={brown200}>熟酒</Chip>
    }
    if( 2 <= review.香り & 2 <= review.味 & review.熟成 <= 2 ){
      return <Chip backgroundColor={purple200}>薫醇酒</Chip>
    }
  }
  type() {
    return '爽酒'
  }

  render() {
    let styles = {
      typeMark: {
        margin: '1em 0 0 0',
      },
    }
    return (
      <div style={ Object.assign( styles.typeMark, this.props.style ) }>{ this.judgeType( this.props.review ) }</div>
    )
  }
}

TypeMark.propTypes = {
  review: PropTypes.number.isRequired,
  style: PropTypes.object,
}

export default TypeMark
