import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
// actions
import { getGlossary } from '../actions/glossary'
// components
import Glossary from '../components/Glossary'

class GlossaryContainer extends React.Component {
  constructor(props) {
    super(props)
    getGlossary( this.props.dispatch )
  }

  render() {
    return(
      <div>
        <Glossary
          glossary = {this.props.glossary}
        />
      </div>
    )
  }
}

GlossaryContainer.propTypes = {
  dispatch: PropTypes.func.isRequired,
  glossary: PropTypes.array.isRequired,
}

const mapStateToProps = state => state
export default connect( mapStateToProps )( GlossaryContainer )
