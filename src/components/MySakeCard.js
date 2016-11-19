import React, { PropTypes } from 'react'
import { Link } from 'react-router'
// material-ui
import {Card, CardHeader, CardText} from 'material-ui/Card'
// components
import Stars from './Stars'
import TypeMark from './TypeMark'
// util
import { averageEvaluation, averageReview } from '../util/calcReviews'
// lib
let dateFormat = require('dateformat')

class MySakeCard extends React.Component {
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
        overflow: 'hidden',
      },
      date: {
        float: 'right',
        fontSize: '.8em',
        marginRight: '1em',
        paddingTop: '.5em',
      },
      description: {
        marginBottom: '1em',
        paddingLeft: '1em',
        width: '100%',
      },
      img: {
        float: 'right',
        height: '100px',
        marginRight: '1em',
        marginTop: '.5em',
      },
      link: {
        color: '#000',
        textDecoration: 'none',
      },
      text: {
        height: '6em',
        overflow: 'hidden',
        whiteSpace: 'pre-wrap',
      },
    }
    const imageURL = '//' + location.host + '/api/sakes/' + this.props.sake._id + '/image'
    return (
      <Link to={`/sake/${this.props.sake._id}`} style={styles.link}>
        <Card style={ styles.card }>
          <img src={ imageURL } style={ styles.img } />
          <CardHeader
            title={ `${this.props.sake.brand}　${this.props.sake.subname} ( ${this.props.sake.type} )` }
            subtitle={ `${this.props.sake.brewery} ( ${this.props.sake.prefecture} ) ` }
          />
          <CardText>
            { this.props.sake.reviews.sort( (a, b) => { return a.date < b.date } ).map( review => {
              return (
                <div style={ styles.description }>
                  <Stars evaluation={ review.evaluation } />
                  <div style={ styles.date }>{ dateFormat(review.date , 'yyyy/mm/dd HH:MM') }</div>
                  <div style={ styles.text }>{ review.comment }</div>
                </div>
              )
            } ) }
          </CardText>
        </Card>
      </Link>
    )
  }
}

MySakeCard.propTypes = {
  sake: PropTypes.object.isRequired,
}

export default MySakeCard
