import React, { PropTypes } from 'react'

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
