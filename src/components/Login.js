import React from 'react'
// material-ui
import RaisedButton from 'material-ui/RaisedButton'

class Login extends React.Component{
  constructor( props ) {
    super( props )
  }
  render() {
    return (
    <div><a href = "/auth/twitter"><RaisedButton label="Twitterでログイン" /></a></div>
    )
  }
}

export default Login
