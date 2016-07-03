import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { getSakeList } from '../actions'
import SakeCard from '../components/SakeCard'

class List extends Component {
  constructor(props) {
    super(props)
  }

  componentWillMount() {
    getSakeList( this.props.dispatch )
  }

  render() {
    return (
      <div>
        { this.props.list.map( sake => <SakeCard sake={ sake } />  ) }
      </div>
    )
  }
}

function mapStateToProps(state) {
  return state
}

List.propTypes = {
  dispatch: PropTypes.func.isRequired,
  list: PropTypes.array.isRequired
}

export default connect( mapStateToProps )( List )
