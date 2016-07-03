import React, { PropTypes } from 'react'
import {Card, CardTitle, CardText} from 'material-ui/Card'

const SakeCard = ( { sake } ) => (
  <Card>
    <CardTitle title={ sake.name } />
    <CardText>{ sake._id }</CardText>
  </Card>
)

SakeCard.propTypes = {
  sake: PropTypes.object.isRequired
}

export default SakeCard
