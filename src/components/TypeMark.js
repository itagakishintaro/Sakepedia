import React, { PropTypes } from 'react'
// material-ui
import Chip from 'material-ui/Chip'
import { blue200, brown200, green200, orange200, purple200 } from 'material-ui/styles/colors'
// util
import concatObj from '../util/concatObj'

class TypeMark extends React.Component {
  judgeType( review ) {
    if( !(review.flabor && review.taste && review.maturation) ) {
      return ''
    }
    if( review.flabor <= 2 & review.taste <= 2 ){
      return <Chip backgroundColor={blue200}>爽酒</Chip>
    }
    if( review.flabor <= 2 & 2 <= review.taste ){
      return <Chip backgroundColor={orange200}>醇酒</Chip>
    }
    if( 2 <= review.flabor & review.taste <= 2 ){
      return <Chip backgroundColor={green200}>薫酒</Chip>
    }
    if( 2 <= review.flabor & 2 <= review.taste &  2 <= review.maturation ){
      return <Chip backgroundColor={brown200}>熟酒</Chip>
    }
    if( 2 <= review.flabor & 2 <= review.taste & review.maturation <= 2 ){
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
      <div style={ concatObj( styles.typeMark, this.props.style ) }>{ this.judgeType( this.props.review ) }</div>
    )
  }
}

TypeMark.propTypes = {
  review: PropTypes.object.isRequired,
  style: PropTypes.object,
}

export default TypeMark
