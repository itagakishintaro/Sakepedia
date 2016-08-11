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

  openMenu(){
    this.setState({open: !this.state.open})
  }

  render() {
    return (
      <div>
        <AppBar
          title="Sakepedia"
          iconElementLeft={
            <IconButton onClick={ this.openMenu.bind(this) } ><MenuIcon color={'#fff'} /></IconButton>
          }
          style={ styles.appbar }
        />
        <Drawer open={this.state.open} docked={false} onRequestChange={(open) => this.setState({open})}>
          <MenuItem onTouchTap={() => this.setState({open: false})}><Link to={'/'} style={styles.link}>トップ</Link></MenuItem>
          <MenuItem onTouchTap={() => this.setState({open: false})}><Link to={'/sake/new'} style={styles.link}>銘柄登録</Link></MenuItem>
          <MenuItem onTouchTap={() => this.setState({open: false})} primaryText='YYY' />
        </Drawer>
      </div>
    )
  }
}

export default Header
