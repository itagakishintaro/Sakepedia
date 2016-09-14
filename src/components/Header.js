import React from 'react'
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
    this.state = {open: false}
  }

  toggleMenu(){
    this.setState({open: !this.state.open})
  }

  render() {
    return (
      <div>
        <AppBar
          title="Sakepedia"
          iconElementLeft={
            <IconButton onClick={ this.toggleMenu.bind(this) } ><MenuIcon color={'#fff'} /></IconButton>
          }
          style={ styles.appbar }
        />
        <Drawer open={this.state.open} docked={false} onRequestChange={(open) => this.setState({open})}>
          <Link to={'/'} style={styles.link}><MenuItem onTouchTap={() => this.setState({open: false})}>トップ</MenuItem></Link>
          <Link to={'/sake/new'} style={styles.link}><MenuItem onTouchTap={() => this.setState({open: false})}>銘柄登録</MenuItem></Link>
          <Link to={'/login'} style={styles.link}><MenuItem onTouchTap={() => this.setState({open: false})}>ログイン</MenuItem></Link>
        </Drawer>
      </div>
    )
  }
}

export default Header
