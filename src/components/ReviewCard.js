import React, { PropTypes } from 'react'
// material-ui
import Badge from 'material-ui/Badge'
import {Card, CardHeader, CardText} from 'material-ui/Card'
import Chip from 'material-ui/Chip'
import { blue200, brown200, green200, orange200, purple200 } from 'material-ui/styles/colors'
// components
import Stars from './Stars'
// lib
let dateFormat = require('dateformat')

class Review extends React.Component {
  judgeType( review ) {
    if( review.flavor <= 2 & review.taste <= 2 ){
      return <Chip backgroundColor={blue200}>爽酒</Chip>
    }
    if( review.flavor <= 2 & 2 <= review.taste ){
      return <Chip backgroundColor={orange200}>醇酒</Chip>
    }
    if( 2 <= review.flavor & review.taste <= 2 ){
      return <Chip backgroundColor={green200}>薫酒</Chip>
    }
    if( 2 <= review.flavor & 2 <= review.taste &  2 <= review.maturation ){
      return <Chip backgroundColor={brown200}>熟酒</Chip>
    }
    if( 2 <= review.flavor & 2 <= review.taste & review.maturation <= 2 ){
      return <Chip backgroundColor={purple200}>薫醇酒</Chip>
    }
  }

  render() {
    const styles = {
      card: {
        'marginBottom': '1em',
      },
      date: {
        float: 'right',
        fontSize: '.5em',
        padding: '.5em',
      },
      type: {
        display: 'flex',
        flexWrap: 'wrap',
      },
      typeMark: {
        margin: '1em 0 0',
      },
    }
    return (
      <Card style={ styles.card }>
        <div style={ styles.date }>{ dateFormat(this.props.review.date , 'yyyy/mm/dd HH:MM')}</div>
        <CardHeader
          title={ <Stars evaluation={this.props.review.evaluation} /> }
          subtitle={ this.props.review.userName }
        />
        <CardText>
          <div>{ this.props.review.comment }</div>
          <div style={ styles.type }>
            <div style={styles.typeMark}>{ this.judgeType(this.props.review) }</div>
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
          <div>
            <span>相性のよい料理：</span><span>{ this.props.review.matched }</span>
          </div>
        </CardText>
      </Card>
    )
  }
}

Review.propTypes = {
  review: PropTypes.object.isRequired,
}

export default Review
