import React from 'react'
import { connect } from 'react-redux'
// actions
import { setAuthStatus } from '../actions/auth'
// css
import classes from '../../public/stylesheets/scss/app.scss'
// components
import Header from '../components/Header'

class App extends React.Component {
  componentDidMount(){
    if( document.getElementById( 'id' ).innerHTML ) {
      this.dispatch( setAuthStatus( true ) )
    } else {
      this.dispatch( setAuthStatus( false ) )
    }
  }
  render() {
    return (
      <div className={classes.content}>
        <Header isLogin={this.props.isLogin}/>

        {/* add this */}
        {this.props.children}

      </div>
    )
  }
}

App.propTypes = {
  children: React.PropTypes.element.isRequired,
  isLogin: React.PropTypes.bool.isRequired,
}

const mapStateToProps = state => state
export default connect( mapStateToProps )( App )
