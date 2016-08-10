import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import {Card, CardHeader, CardText} from 'material-ui/Card'

const styles = {
  card: {
    'marginTop': '1em',
  },
  img: {
    'height': '100px',
    'marginLeft': '1em',
  },
  link: {
    color: '#000',
    textDecoration: 'none',
  },
}

class SakeCard extends React.Component {
  render() {
    return (
      <Link to={`/sake/${this.props.sake._id}`} style={styles.link}>
        <Card style={ styles.card }>
          <CardHeader
            title={ `${this.props.sake.名前} ( ${this.props.sake.種類} )` }
            subtitle={ `${this.props.sake.蔵元} ( ${this.props.sake.都道府県} ) ` }
          />
          <div>
            <img src={ this.props.sake.画像URL } style={ styles.img } />
          </div>
          <CardText>{ this.props.sake.香味 }</CardText>
        </Card>
      </Link>
    )
  }
}

SakeCard.propTypes = {
  sake: PropTypes.object.isRequired,
}

export default SakeCard
