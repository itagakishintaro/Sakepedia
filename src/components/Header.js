import React from 'react'
import { Link } from 'react-router'
import { AppBar, IconButton, Drawer, MenuItem } from 'material-ui'
import MenuIcon from 'material-ui/svg-icons/navigation/menu'

const styles = {
  appbar: {
    marginBottom: '1rem',
  },
}

class Header extends React.Component{
  constructor(props) {
    super(props)
    this.state = {open: false}
  }

  componentDidMount(){
    console.log('componentDidMount')
    document.getElementById('menuIcon').addEventListener( 'click', () =>{
      console.log('state', this.state)
      this.setState({open: !this.state.open})
      console.log('state', this.state)
    } )
  }

  render() {
    return (
      <div>
        <AppBar
          title="Sakepedia"
          iconElementLeft={
            <IconButton id="menuIcon"><MenuIcon color={'#fff'} /></IconButton>
          }
          style={ styles.appbar }
        />
        <Drawer open={this.state.open} docked={false} onRequestChange={(open) => this.setState({open})}>
          <MenuItem onTouchTap={() => this.setState({open: false})}><Link to={'/'}>トップ</Link></MenuItem>
          <MenuItem onTouchTap={() => this.setState({open: false})} primaryText='XXX' />
          <MenuItem onTouchTap={() => this.setState({open: false})} primaryText='YYY' />
        </Drawer>
      </div>
    )
  }
}

export default Header
