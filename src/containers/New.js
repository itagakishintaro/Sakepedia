import React, { PropTypes } from 'react'
import { connect } from 'react-redux'

class New extends React.Component {
  render() {
    return (
      <div>
        <h1>新規登録</h1>
      </div>
    )
  }
}

New.propTypes = {
  dispatch: PropTypes.func.isRequired,
  list: PropTypes.array.isRequired,
}

const mapStateToProps = state => state
export default connect( mapStateToProps )( New )
