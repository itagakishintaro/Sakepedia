import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import SakeCard from '../components/SakeCard'

class List extends React.Component {
  render() {
    return (
      <div>
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
