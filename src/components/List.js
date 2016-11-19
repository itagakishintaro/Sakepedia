import React, { PropTypes } from 'react'
// css
import classes from '../../public/stylesheets/scss/list.scss'
// components
import MySakeCard from '../components/MySakeCard'
import SakeCard from '../components/SakeCard'
// util
import { averageEvaluation } from '../util/calcReviews'

class List extends React.Component {
  sortByEval( a, b ) {
    if( averageEvaluation( a.reviews ) < averageEvaluation( b.reviews ) ){
      return 1
    } else {
      return -1
    }
  }

  sortByReviewTime( a, b ) {
    if( Math.max.apply( null, a.reviews.map( r=> { return new Date( r.date ).getTime() } ) )
      < Math.max.apply( null, b.reviews.map( r => { return new Date( r.date ).getTime() } ) ) ) {
      return 1
    } else {
      return -1
    }
  }

  render() {
    const MAX = 100
    let alertMessage = ''
    if ( MAX <= this.props.list.length ) {
      alertMessage = `検索結果が多すぎるため、${ MAX }件のみ表示しています。検索条件を絞り込んでください。`
    }
    const styles = {
      list: {
        display: 'flex',
        flexWrap: 'wrap',
      },
    }

    let sakelist = this.props.list
    if( this.props.card === 'mycard' ) {
      // filter review
      sakelist = sakelist.map( sake => {
        let myReviews = sake.reviews.filter( review => {
          return review.userid === window.localStorage.getItem( 'userid' )
        } )
        sake.reviews = myReviews
        return sake
      } )
      // sort
      sakelist.sort( ( a, b ) => { return this.sortByReviewTime( a, b ) } )
    } else {
      sakelist.sort( ( a, b ) => { return this.sortByEval( a, b ) } )
    }
    return (
      <div>
        <div className={classes.alert}>{ alertMessage }</div>
        <div style={ styles.list }>
          { sakelist.map( sake => {
            if( this.props.card === 'mycard' ){
              return <MySakeCard sake={sake} />
            }
            return <SakeCard sake={sake} />
          } ) }
        </div>
      </div>
    )
  }
}

List.propTypes = {
  card: PropTypes.string,
  dispatch: PropTypes.func.isRequired,
  list: PropTypes.array.isRequired,
}

export default List
