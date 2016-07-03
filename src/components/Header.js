import React from 'react'
import { Link } from 'react-router'
import { AppBar, IconButton, IconMenu, MenuItem } from 'material-ui'
import MenuIcon from 'material-ui/svg-icons/navigation/menu'

const Header = () => (
  <AppBar
    title="Sakepedia"
    iconElementLeft={
      <IconMenu
        iconButtonElement={ <IconButton><MenuIcon color={'#fff'} /></IconButton> }
        targetOrigin={{horizontal: 'right', vertical: 'top'}}
        anchorOrigin={{horizontal: 'right', vertical: 'top'}}
      >
        <MenuItem><Link to={'/'}>トップ</Link></MenuItem>
        <MenuItem primaryText='XXX' />
        <MenuItem primaryText='YYY' />
      </IconMenu>
    }
  />
)

export default Header
