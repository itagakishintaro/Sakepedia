import React, { PropTypes } from 'react'
import { Link } from 'react-router'
// material-ui
import Badge from 'material-ui/Badge'
import {Card, CardHeader, CardText} from 'material-ui/Card'
import Checkbox from 'material-ui/Checkbox'
import RaisedButton from 'material-ui/RaisedButton'
// components
import Stars from './Stars'
import TypeMark from './TypeMark'
// lib
let dateFormat = require('dateformat')
// css
import classes from '../../public/stylesheets/scss/_common.scss'

class ReviewCard extends React.Component {
  isMine() {
    return this.props.review.userid === window.localStorage.getItem( 'userid' )
  }
  updateReview(){
    if( this.isMine() ) {
      this.props.setReview( this.props.review )
      this.props.changeTab( 'createReview' )
    }
  }

  render() {
    const styles = {
      button: {
        margin: '0',
      },
      card: {
        height: '30em',
        marginBottom: '1em',
        maxWidth: '414px',
        width: '100%',
      },
      comment: {
        height: '6em',
        marginBottom: '.5em',
        overflow: 'scroll',
        whiteSpace: 'pre-wrap',
      },
      content:{
        marginLeft: '1em',
      },
      date: {
        float: 'right',
        fontSize: '.5em',
        padding: '.5em',
      },
      updateBtn: {
        color: 'blue',
        display: 'none',
        marginLeft: '.5em',
      },
      label: {
        marginTop: '1em',
      },
      mariage:{
        height: '4em',
        marginLeft: '1em',
        overflow: 'scroll',
      },
      type: {
        display: 'flex',
        flexWrap: 'wrap',
      },
      typeMark: {
        margin: '1em 0 0 0',
      },
    }
    if( this.isMine() ) {
      styles.updateBtn.display = 'inline'
    }
    let subtitle = <span><span>{this.props.review.username}</span><i className="fa fa-pencil-square-o fa-2x" style={styles.updateBtn} onClick={this.updateReview.bind(this)}></i></span>
    return (
      <Card style={ styles.card }>
        <div style={ styles.date }>{ dateFormat(this.props.review.date , 'yyyy/mm/dd HH:MM')}</div>
        <CardHeader
          title={ <Stars evaluation={this.props.review.evaluation} /> }
          subtitle={ subtitle }
        />
        <CardText>
          <div style={ styles.comment } >{ this.props.review.comment }</div>

          <div style={ styles.type }>
            <TypeMark review={ this.props.review } />
            <Badge
              badgeContent={ this.props.review.flavor }
              secondary={true}
            >香り</Badge>
            <Badge
              badgeContent={ this.props.review.taste }
              secondary={true}
            >味</Badge>
            <Badge
              badgeContent={ this.props.review.maturation }
              secondary={true}
            >熟成</Badge>
          </div>

          <div style={ styles.label }>適した温度</div>
          <div style={ styles.content }>
              <Checkbox
                checked={ this.props.review.temperature['temp5'] }
                disabled={true}
                label="一番冷たい(5度位)"
              />
              <Checkbox
                checked={ this.props.review.temperature['temp10'] }
                disabled={true}
                label="やや冷たい(10度位)"
              />
              <Checkbox
                checked={ this.props.review.temperature['temp15'] }
                disabled={true}
                label="常温(15度位)"
              />
              <Checkbox
                checked={ this.props.review.temperature['temp40'] }
                disabled={true}
                label="ぬる燗(40度位)"
              />
              <Checkbox
                checked={ this.props.review.temperature['temp50'] }
                disabled={true}
                label="熱燗(50度位)"
              />
          </div>

          <div style={ styles.label }>マリアージュ</div>
          <div style={ styles.mariage }>{ this.props.review.mariage }</div>
        </CardText>
      </Card>
    )
  }
}

ReviewCard.propTypes = {
  changeTab: PropTypes.func.isRequired,
  setReview: PropTypes.func.isRequired,
  review: PropTypes.object.isRequired,
}

export default ReviewCard
