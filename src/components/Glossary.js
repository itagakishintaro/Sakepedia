import React, { PropTypes } from 'react'
// css
import classes from '../../public/stylesheets/scss/glossary.scss'

class Glossary extends React.Component{
  constructor(props) {
    super(props)
  }
  render(){
    return(
    <table className={classes.table}>
          { this.props.glossary.map( ( array, index ) => {
            if( index === 0 ) {
              return(
                <tr className={classes.tr}>
                  <th className={classes.th} width="25%">{ array[0] + '\n(' + array[1] + ')' }</th>
                  <th className={classes.th} >{ array[2] }</th>
                </tr>
              )
            } else {
              return(
                <tr className={classes.tr}>
                  <td className={classes.td} width="25%">{ array[0] + '\n(' + array[1] + ')' }</td>
                  <td className={classes.td} >{ array[2] }</td>
                </tr>
              )
            }
          } ) }
    </table>
    )
  }
}

Glossary.propTypes = {
  glossary: PropTypes.array.isRequired,
}

export default Glossary
