import React, { PropTypes } from 'react'
import styles from '../../public/stylesheets/scss/details.scss'

const Details = ( { sake } ) => (
  <table className={styles.table}>
        { Object.keys(sake).map( key => {
          return(
            <tr className={styles.tr}>
              <th className={styles.th}>{ key }</th>
              <td className={styles.td}>{ sake[key] }</td>
            </tr>
          )
        } ) }
  </table>
)

Details.propTypes = {
  sake: PropTypes.object.isRequired,
}

export default Details
