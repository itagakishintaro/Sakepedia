import styles from '../../public/stylesheets/scss/list.scss'

import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import SakeCard from './SakeCard'

class List extends React.Component {
  render() {
    const MAX = 100
    let alertMessage = ''
    if ( MAX <= this.props.list.length ) {
      alertMessage = `検索結果が多すぎるため、${ MAX }件のみ表示しています。検索条件を絞り込んでください。`
    }
    return (
      <div>
        <div className={styles.alert}>{ alertMessage }</div>
        { this.props.list.map( sake => <SakeCard sake={ sake } />  ) }
      </div>
    )
  }
}

List.propTypes = {
  dispatch: PropTypes.func.isRequired,
  list: PropTypes.array.isRequired,
}

const mapStateToProps = state => state
export default connect( mapStateToProps )( List )
