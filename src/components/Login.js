import React from 'react'
// material-ui
import RaisedButton from 'material-ui/RaisedButton'

class Login extends React.Component{
  constructor( props ) {
    super( props )
  }
  render() {
    let styles = {
      button: {
        margin: '.5em 0',
        width: '100%',
      },
    }
    return (
      <div>
        <div><a href = "/auth/twitter"><RaisedButton label="Twitterでログイン" style={styles.button} backgroundColor="#1DA1F3" labelColor="white" /></a></div>
        <div><a href = "/auth/facebook"><RaisedButton label="Facebookでログイン" style={styles.button} backgroundColor="#3B579D" labelColor="white" /></a></div>
        <div><a href = "/auth/google"><RaisedButton label="Googleでログイン" style={styles.button} backgroundColor="#DC4A38" labelColor="white" /></a></div>
      </div>
    )
  }
}

export default Login
