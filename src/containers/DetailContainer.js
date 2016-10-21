import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
// actions
import { getSake } from '../actions/sake'
// components
import Detail from '../components/Detail'
// util
import setTweet from '../util/twitter'
import setFacebook from '../util/facebook'

class DetailContainer extends React.Component{
  constructor(props) {
    super(props)
    getSake( this.props.dispatch, this.props.params.sakeId )
  }

  update() {
    getSake( this.props.dispatch, this.props.params.sakeId )
  }

  sns() {
    if( document.getElementsByClassName('twitter-share-button').length && document.getElementsByClassName('facebook-share-button').length) {
      setTweet()
      setFacebook()
    }
  }

  render() {
    this.sns()
    return (
      <Detail
        initialTab="detail"
        isLogin={this.props.isLogin}
        sake={this.props.sake}
        update={this.update.bind(this)}
      />
    )
  }
}

DetailContainer.propTypes = {
  dispatch: PropTypes.func.isRequired,
  isLogin: PropTypes.bool.isRequired,
  location: PropTypes.object,
  params: PropTypes.object.isRequired,
  sake: PropTypes.object.isRequired,
}

const mapStateToProps = state => state
export default connect( mapStateToProps )( DetailContainer )
