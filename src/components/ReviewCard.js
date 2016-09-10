import React, { PropTypes } from 'react'
// material-ui
import Badge from 'material-ui/Badge'
import {Card, CardHeader, CardText} from 'material-ui/Card'
import Checkbox from 'material-ui/Checkbox'
// components
import Stars from './Stars'
import TypeMark from './TypeMark'
// lib
let dateFormat = require('dateformat')

class ReviewCard extends React.Component {
  render() {
    const styles = {
      card: {
        marginBottom: '1em',
        maxWidth: '400px',
        width: '100%',
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
        margin: '1em 0 0 0',
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
            <TypeMark review={ this.props.review } />
            <Badge
              badgeContent={ this.props.review.香り }
              secondary={true}
            >香り</Badge>
            <Badge
              badgeContent={ this.props.review.味 }
              secondary={true}
            >味</Badge>
            <Badge
              badgeContent={ this.props.review.熟成 }
              secondary={true}
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
