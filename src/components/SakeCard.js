import React, { PropTypes } from 'react'
import {Card, CardMedia, CardTitle, CardText} from 'material-ui/Card'

const mediaStyle = { width: '2em' }
const SakeCard = ( { sake } ) => (
  <Card>
    <CardTitle title={ `${sake.名前} ( ${sake.種類} )` } subtitle={ `${sake.蔵元} ( ${sake.都道府県} ) ` }/>
    <CardMedia mediaStyle={ mediaStyle } >
      <img src={ sake.画像URL } />
    </CardMedia>
    <CardText>{ sake.香味 }</CardText>
  </Card>
)

SakeCard.propTypes = {
  sake: PropTypes.object.isRequired
}

export default SakeCard
