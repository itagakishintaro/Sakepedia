import React, { PropTypes } from 'react'
// css
import classes from '../../public/stylesheets/scss/list.scss'
// components
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

    return (
      <div>
        <div className={classes.alert}>{ alertMessage }</div>
        <div style={ styles.list }>
          { this.props.list.sort( (a, b) => {
            return this.sortByEval(a, b)
          } ).map( sake => {
            if( this.props.card === 'mycard' ){
              return <SakeCard sake={sake} />
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
