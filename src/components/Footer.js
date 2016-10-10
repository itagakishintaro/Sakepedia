import React, { PropTypes } from 'react'
// material-ui
import { AppBar, IconButton} from 'material-ui'
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

class Footer extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      open: false,
    }
  }

  toggleMenu(){
    this.setState({open: !this.state.open})
  }

  logout() {
    window.localStorage.clear()
  }

  render() {
    return (
      <div>
        <a href="https://github.com/itagakishintaro/Sakepedia/issues">ご意見・ご要望など</a>
      </div>
    )
  }
}

Footer.propTypes = {
  isLogin: PropTypes.bool.isRequired,
}

export default Footer
