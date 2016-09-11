import React, { PropTypes } from 'react'
import { Link } from 'react-router'
// material-ui
import {Card, CardHeader, CardText} from 'material-ui/Card'
// components
import Stars from './Stars'
import TypeMark from './TypeMark'

class SakeCard extends React.Component {
  constructor(props) {
    super(props)
    this.width = window.innerWidth - 16 + 'px'
    this.resizeWidth()
    window.addEventListener( 'resize', this.resizeWidth )
  }
  averageEvaluation( reviews ) {
    if( !reviews ) {
      return 0
    }
    return reviews.map( r => Number( r.評価 ) ).reduce( ( p, c ) => p + c ) / reviews.length
  }
  averageReview( reviews ) {
    if( !reviews ) {
      return {}
    }
    let flavor = reviews.map( r => Number( r.香り ) ).reduce( ( p, c ) => p + c ) / reviews.length
    let taste = reviews.map( r => Number( r.味 ) ).reduce( ( p, c ) => p + c ) / reviews.length
    let maturation = reviews.map( r => Number( r.熟成 ) ).reduce( ( p, c ) => p + c ) / reviews.length
    return { 香り: flavor, 味: taste, 熟成: maturation }
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
      typeMark: {
        float: 'right',
        marginRight: '1em',
      }
    }
    return (
      <Link to={`/sake/${this.props.sake._id}`} style={styles.link}>
        <Card style={ styles.card }>
          <TypeMark review={ this.averageReview( this.props.sake.レビュー ) } style={ styles.typeMark } />
          <CardHeader
            title={ `${this.props.sake.銘柄名} ( ${this.props.sake.種類} )` }
            subtitle={ `${this.props.sake.蔵元} ( ${this.props.sake.都道府県} ) ` }
          />
          <CardText style={ styles.cardText }>
            <div style={ styles.picture }>
              <img src={ this.props.sake.画像URL } style={ styles.img } />
            </div>
            <div style={ styles.description }>
              <Stars evaluation={ this.averageEvaluation( this.props.sake.レビュー ) } />
              <div>{ this.props.sake.説明 }</div>
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
