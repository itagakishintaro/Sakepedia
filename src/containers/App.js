import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
// actions
import { setAuthStatus } from '../actions/isLogin'
// css
import classes from '../../public/stylesheets/scss/app.scss'
// components
import Header from '../components/Header'
import Footer from '../components/Footer'
// util
import setTweet from '../util/twitter'
import setFacebook from '../util/facebook'

class App extends React.Component {
  constructor(props) {
    super(props)
    if( document.getElementById( 'userid' ).innerHTML ) {
      window.localStorage.setItem('userid', document.getElementById( 'userid' ).innerHTML)
      window.localStorage.setItem('username', document.getElementById( 'username' ).innerHTML)
      this.props.dispatch( setAuthStatus( true ) )
    } else if ( window.localStorage.getItem( 'userid' ) ) {
      this.props.dispatch( setAuthStatus( true ) )
    }
    else {
      this.props.dispatch( setAuthStatus( false ) )
    }
  }

  componentDidMount() {
    document.getElementById('loading').style.display='none';
    // load twitter sdk
    !function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');
    // load facebook sdk
    (function(d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s); js.id = id;
      js.src = '//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.8&appId=164983513944480';
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'))

    setTweet()
    setFacebook()
  }

  render() {
    const windowHeight = window.innerHeight
    const headerHeight = 64 + 16 + 16 // height, margin-bottom, root margin
    const footerHeight = 36 + 8 + 4 // height, margin, padding
    const styles = {
      content: {
        minHeight: windowHeight - headerHeight - footerHeight,
      },
    }
    return (
      <div className={classes.app}>
        <Header isLogin={this.props.isLogin}/>

        {/* add this */}
        <div style={styles.content}>
          {this.props.children}
        </div>

        <Footer />
      </div>
    )
  }
}

App.propTypes = {
  children: PropTypes.element.isRequired,
  dispatch: PropTypes.func.isRequired,
  isLogin: PropTypes.bool.isRequired,
}

const mapStateToProps = state => state
export default connect( mapStateToProps )( App )
