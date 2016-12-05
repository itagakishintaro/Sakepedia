import React from 'react'
import { Link } from 'react-router'
// material-ui
import { cyan500, cyan50 } from 'material-ui/styles/colors'
import FontIcon from 'material-ui/FontIcon'

const Footer = () => {
  const styles = {
    ccby: {
      borderWidth: 0,
      float: 'right',
      marginTop: '10px'
    },
    footer: {
      backgroundColor: cyan500,
      color: 'white',
      fontSize: '12',
      height: '36px',
      lineHeight: '36px',
      marginTop: '8px',
      padding: '0 8px',
      verticalAlign: 'middle',
    },
    icon: {
      fontSize: '1.5em',
      marginRight: '.25em',
    },
    link: {
      color: cyan50,
      textDecoration: 'none',
    },
  }
  return(
    <div style={styles.footer}>
      <a href="https://github.com/itagakishintaro/Sakepedia/issues" target="_blank" style={styles.link}>
        <i className="fa fa-github" aria-hidden="true" style={styles.icon}></i>ご意見・ご要望
      </a>
      <span> / </span>
      <Link to={'/api'} style={styles.link}>APIについて</Link>
      <a rel="license" href="http://creativecommons.org/licenses/by/4.0/">
        <img alt="クリエイティブ・コモンズ・ライセンス" style={styles.ccby} src="https://i.creativecommons.org/l/by/4.0/80x15.png" /></a></div>
  )
}

export default Footer
