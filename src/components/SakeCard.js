import React, { PropTypes } from 'react'
import {Card, CardHeader, CardText} from 'material-ui/Card'
import Details from './Details'

const styles = {
  card: {
    'marginTop': '1em',
  },
  img: {
    'height': '100px',
    'marginLeft': '1em',
  },
}

const SakeCard = ( { sake } ) => (
  <Card style={ styles.card }>
    <CardHeader
      title={ `${sake.名前} ( ${sake.種類} )` }
      subtitle={ `${sake.蔵元} ( ${sake.都道府県} ) ` }
      actAsExpander={true}
      showExpandableButton={true}
    />
    <div>
      <img src={ sake.画像URL } style={ styles.img } />
    </div>
    <CardText>{ sake.香味 }</CardText>
    <CardText expandable={true}>
      <Details sake={sake} />
    </CardText>
  </Card>
)

SakeCard.propTypes = {
  sake: PropTypes.object.isRequired,
}

export default SakeCard
