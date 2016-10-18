import React, { PropTypes } from 'react'
import { Link } from 'react-router'
// material-ui
import { AppBar, IconButton, Drawer, MenuItem } from 'material-ui'
import MenuIcon from 'material-ui/svg-icons/navigation/menu'

const styles = {
  appbar: {
    marginBottom: '1rem',
  },
  link: {
    color: '#000',
    textDecoration: 'none',
  }
}

class Header extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      open: false,
    }
    this.close = this.close.bind(this)
    this.toggleMenu = this.toggleMenu.bind(this)
    this.preventWhenLoggedin = this.preventWhenLoggedin.bind(this)
  }

  toggleMenu(){
    this.setState({open: !this.state.open})
  }

  logout() {
    window.localStorage.clear()
  }

  close(){
    this.setState({open: false})
  }

  preventWhenLoggedin(e){
    if(this.props.isLogin) {
      e.preventDefault()
    }
  }

  toHome() {
    location.href='/'
  }

  render() {
    return (
      <div>
        <AppBar
          title="Sakepedia"
          iconElementLeft={
            <IconButton onTouchTap={ this.toggleMenu } ><MenuIcon color={'#fff'} /></IconButton>
          }
          onTitleTouchTap={ this.toHome }
          style={ styles.appbar }
        />
      <Drawer open={this.state.open} docked={false} onRequestChange={ this.close }>
          <Link to={'/'} style={styles.link}><MenuItem onTouchTap={ this.close }>トップ</MenuItem></Link>
          <Link to={'/sake/new'} style={styles.link}><MenuItem onTouchTap={ this.close } disabled={!this.props.isLogin}>銘柄登録</MenuItem></Link>
          <Link to={'/login'} style={styles.link} onTouchTap={this.preventWhenLoggedin}><MenuItem onTouchTap={ this.close } disabled={this.props.isLogin}>ログイン</MenuItem></Link>
          <MenuItem href='/auth/logout' disabled={!this.props.isLogin} onTouchTap={ this.logout }>ログアウト</MenuItem>
        </Drawer>
      </div>
    )
  }
}

Header.propTypes = {
  isLogin: PropTypes.bool.isRequired,
}

export default Header
