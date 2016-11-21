import React, { PropTypes } from 'react'
// css
import classes from '../../public/stylesheets/scss/sheets.scss'
// material-ui
import FontIcon from 'material-ui/FontIcon'
import RaisedButton from 'material-ui/RaisedButton'

class Glossary extends React.Component{
  constructor(props) {
    super(props)
  }
  render(){
    const styles = {
      button: {
        margin: '0 0 1em 0',
      },
    }
    return(
      <div>
        <a href="https://docs.google.com/spreadsheets/d/13xAtWg2neS0TF-8vY2BluIvd5Bbnbx5b0OUsCnnOg4k/edit?usp=sharing" target="_blank">
          <RaisedButton
            label="用語集を編集"
            labelPosition="before"
            primary={true}
            style={styles.button}
            icon={<FontIcon className="material-icons">cloud_upload</FontIcon>}
          />
        </a>
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
      </div>
    )
  }
}

Glossary.propTypes = {
  glossary: PropTypes.array.isRequired,
}

export default Glossary
