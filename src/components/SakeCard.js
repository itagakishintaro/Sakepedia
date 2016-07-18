import React, { PropTypes } from 'react'
import {Card, CardTitle, CardText} from 'material-ui/Card'

const cardStyle = { 'marginTop': '1em' }
const imgStyle = { 'height': '100px', 'marginLeft': '1em' }

const SakeCard = ( { sake } ) => (
  <Card style={ cardStyle }>
    <CardTitle title={ `${sake.名前} ( ${sake.種類} )` } subtitle={ `${sake.蔵元} ( ${sake.都道府県} ) ` }/>
    <div>
      <img src={ sake.画像URL } style={ imgStyle } />
    </div>
    <CardText>{ sake.香味 }</CardText>
  </Card>
)

SakeCard.propTypes = {
  sake: PropTypes.object.isRequired,
}

export default SakeCard
