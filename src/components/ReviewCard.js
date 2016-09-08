import React, { PropTypes } from 'react'
// material-ui
import Badge from 'material-ui/Badge'
import {Card, CardHeader, CardText} from 'material-ui/Card'
import Checkbox from 'material-ui/Checkbox'
import Chip from 'material-ui/Chip'
import { blue200, brown200, green200, orange200, purple200 } from 'material-ui/styles/colors'
// components
import Stars from './Stars'
// lib
let dateFormat = require('dateformat')

class ReviewCard extends React.Component {
  judgeType( review ) {
    if( review.香り <= 2 & review.味 <= 2 ){
      return <Chip backgroundColor={blue200}>爽酒</Chip>
    }
    if( review.香り <= 2 & 2 <= review.味 ){
      return <Chip backgroundColor={orange200}>醇酒</Chip>
    }
    if( 2 <= review.香り & review.味 <= 2 ){
      return <Chip backgroundColor={green200}>薫酒</Chip>
    }
    if( 2 <= review.香り & 2 <= review.味 &  2 <= review.熟成 ){
      return <Chip backgroundColor={brown200}>熟酒</Chip>
    }
    if( 2 <= review.香り & 2 <= review.味 & review.熟成 <= 2 ){
      return <Chip backgroundColor={purple200}>薫醇酒</Chip>
    }
  }

  render() {
    const styles = {
      badge: {
        textAlign: 'right',
        width: '2em',
      },
      card: {
        'marginBottom': '1em',
      },
      comment: {
        marginBottom: '.5em',
      },
      content:{
        marginLeft: '1em',
      },
      date: {
        float: 'right',
        fontSize: '.5em',
        padding: '.5em',
      },
      label: {
        marginTop: '1em',
      },
      type: {
        display: 'flex',
        flexWrap: 'wrap',
      },
      typeMark: {
        margin: '1em 2em 0 0',
      },
    }
    return (
      <Card style={ styles.card }>
        <div style={ styles.date }>{ dateFormat(this.props.review.日時 , 'yyyy/mm/dd HH:MM')}</div>
        <CardHeader
          title={ <Stars evaluation={this.props.review.評価} /> }
          subtitle={ this.props.review.ユーザー名 }
        />
        <CardText>
          <div style={ styles.comment }>{ this.props.review.コメント }</div>

          <div style={ styles.type }>
            <div style={styles.typeMark}>{ this.judgeType(this.props.review) }</div>
            <Badge
              badgeContent={ this.props.review.香り }
              secondary={true}
              style={ styles.badge }
            >香り</Badge>
            <Badge
              badgeContent={ this.props.review.味 }
              secondary={true}
              style={ styles.badge }
            >味</Badge>
            <Badge
              badgeContent={ this.props.review.熟成 }
              secondary={true}
              style={ styles.badge }
            >熟成</Badge>
          </div>

          <div style={ styles.label }>適した温度</div>
          <div style={ styles.content }>
              <Checkbox
                checked={ this.props.review.温度['一番冷たい(5度位)'] }
                disabled={true}
                label="一番冷たい(5度位)"
              />
              <Checkbox
                checked={ this.props.review.温度['やや冷たい(10度位)'] }
                disabled={true}
                label="やや冷たい(10度位)"
              />
              <Checkbox
                checked={ this.props.review.温度['常温(15度位)'] }
                disabled={true}
                label="常温(15度位)"
              />
              <Checkbox
                checked={ this.props.review.温度['ぬる燗(40度位)'] }
                disabled={true}
                label="ぬる燗(40度位)"
              />
              <Checkbox
                checked={ this.props.review.温度['熱燗(50度位)'] }
                disabled={true}
                label="熱燗(50度位)"
              />
          </div>

          <div style={ styles.label }>相性のよい料理</div>
          <div style={ styles.content }>{ this.props.review.相性のよい料理 }</div>
        </CardText>
      </Card>
    )
  }
}

ReviewCard.propTypes = {
  review: PropTypes.object.isRequired,
}

export default ReviewCard
