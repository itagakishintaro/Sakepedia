import React, { PropTypes } from 'react'
import { Link } from 'react-router'
// material-ui
import {Card, CardHeader, CardText} from 'material-ui/Card'
// components
import Stars from './Stars'
import TypeMark from './TypeMark'
// util
import { averageEvaluation, averageReview } from '../util/calcReviews'

class SakeCard extends React.Component {
  constructor(props) {
    super(props)
    this.width = window.innerWidth - 16 + 'px'
    this.resizeWidth()
    window.addEventListener( 'resize', this.resizeWidth )
  }

  resizeWidth() {
    this.width = window.innerWidth - 16 + 'px'
    if( 414 < window.innerWidth ) {
      this.width = '360px'
    }
  }
  render() {
    const styles = {
      card: {
        marginTop: '1em',
        width: this.width,
        height: '15em',
      },
      cardText: {
        display: 'flex',
      },
      description: {
        paddingLeft: '1em',
        width: '80%',
      },
      img: {
        height: '100%',
        left: '50%',
        position: 'relative',
        top: '50%',
        transform: 'translate(-50%, -50%)',
        width: 'auto',
      },
      link: {
        color: '#000',
        textDecoration: 'none',
      },
      picture: {
        height: '100px',
        maxWidth: '100px',
        overflow: 'hidden',
        width: '20%',
      },
      review: {
        display: 'flex',
        justifyContent: 'space-between',
        padding: '0 0 0 1em',
      },
      text: {
        height: '6em',
        overflow: 'hidden',
      },
      typeMark: {
        float: 'right',
        marginRight: '1em',
      }
    }
    const imageURL = '//' + location.host + '/api/sakes/' + this.props.sake._id + '/image'
    return (
      <Link to={`/sake/${this.props.sake._id}`} style={styles.link}>
        <Card style={ styles.card }>
          <TypeMark review={ averageReview( this.props.sake.reviews ) } style={ styles.typeMark } />
          <CardHeader
            title={ `${this.props.sake.brand}　${this.props.sake.subname} ( ${this.props.sake.type} )` }
            subtitle={ `${this.props.sake.brewery} ( ${this.props.sake.prefecture} ) ` }
          />
          <CardText style={ styles.cardText }>
            <div style={ styles.picture }>
              <img src={ imageURL } style={ styles.img } />
            </div>
            <div style={ styles.description }>
              <Stars evaluation={ averageEvaluation( this.props.sake.reviews ) } />
              <div style={ styles.text }>{ this.props.sake.description }</div>
            </div>
          </CardText>
        </Card>
      </Link>
    )
  }
}

SakeCard.propTypes = {
  sake: PropTypes.object.isRequired,
}

export default SakeCard
