import React, { PropTypes } from 'react'
import { Link } from 'react-router'
// material-ui
import { AppBar, IconButton, Drawer, MenuItem } from 'material-ui'
import MenuIcon from 'material-ui/svg-icons/navigation/menu'

class Header extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      open: false,
    }
    this.close = this.close.bind(this)
    this.toggleMenu = this.toggleMenu.bind(this)
    this.preventWhenLoggedin = this.preventWhenLoggedin.bind(this)
    this.preventWhenLoggedout = this.preventWhenLoggedout.bind(this)
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

  preventWhenLoggedout(e){
    if(!this.props.isLogin) {
      e.preventDefault()
    }
  }

  toHome() {
    location.href='/#/'
  }

  render() {
    const styles = {
      appbar: {
        marginBottom: '1rem',
      },
      link: {
        color: '#000',
        textDecoration: 'none',
      },
    }
    let loginout
    if( this.props.isLogin ) {
      loginout = <MenuItem href='/auth/logout' onTouchTap={ this.logout }>ログアウト <i className="fa fa-sign-out" aria-hidden="true"></i></MenuItem>
    } else {
      loginout = <Link to={'/login'} style={styles.link}><MenuItem onTouchTap={ this.close }>ログイン <i className="fa fa-sign-in" aria-hidden="true"></i></MenuItem></Link>
    }
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
          <Link to={'/mypage'} style={styles.link} onTouchTap={this.preventWhenLoggedout}><MenuItem onTouchTap={ this.close } disabled={!this.props.isLogin}>マイページ</MenuItem></Link>
          <Link to={'/sake/new'} style={styles.link} onTouchTap={this.preventWhenLoggedout}><MenuItem onTouchTap={ this.close } disabled={!this.props.isLogin}>銘柄登録</MenuItem></Link>
          <Link to={'/glossary'} style={styles.link}><MenuItem onTouchTap={ this.close }>用語集</MenuItem></Link>
          <Link to={'/shoplist'} style={styles.link}><MenuItem onTouchTap={ this.close }>酒屋リスト</MenuItem></Link>
          <MenuItem>
            <div id="fb-root"></div>
            <div id="fb-area"></div>
          </MenuItem>
          <MenuItem>
            <div id="tw-area"></div>
          </MenuItem>
          <div>{loginout}</div>
        </Drawer>
      </div>
    )
  }
}

Header.propTypes = {
  isLogin: PropTypes.bool.isRequired,
}

export default Header
