import React, { PropTypes } from 'react'
// css
import classes from '../../public/stylesheets/scss/sheets.scss'
// material-ui
import FontIcon from 'material-ui/FontIcon'
import RaisedButton from 'material-ui/RaisedButton'

class Shoplist extends React.Component{
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
            label="酒屋リストを編集"
            labelPosition="before"
            primary={true}
            style={styles.button}
            icon={<FontIcon className="material-icons">cloud_upload</FontIcon>}
          />
        </a>
        <div style={{overflow: 'scroll'}}>
        <table className={classes.table} style={{width: 660}}>
              { this.props.shoplist.map( ( array, index ) => {
                if( index === 0 ) {
                  return(
                    <tr className={classes.tr}>
                      <th className={classes.th} width="100">{ array[0] }</th>
                      <th className={classes.th} width="80">{ array[1] }</th>
                      <th className={classes.th} width="80">{ array[2] }</th>
                      <th className={classes.th} width="100">{ array[3] }</th>
                      <th className={classes.th} width="300">{ array[5] }</th>
                    </tr>
                  )
                } else {
                  return(
                    <tr className={classes.tr}>
                    <td className={classes.td} width="100"><a href={ array[4] } target="_blank">{ array[0] }</a></td>
                      <td className={classes.td} width="80">{ array[1] }</td>
                      <td className={classes.td} width="80">{ array[2] }</td>
                      <td className={classes.td} width="100">{ array[3] }</td>
                      <td className={classes.td} width="300">{ array[5] }</td>
                    </tr>
                  )
                }
              } ) }
        </table>
        </div>
      </div>
    )
  }
}

Shoplist.propTypes = {
  shoplist: PropTypes.array.isRequired,
}

export default Shoplist
