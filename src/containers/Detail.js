import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { getSake } from '../actions'
import FlatButton from 'material-ui/FlatButton'
import NewReview from './NewReview'
import styles from '../../public/stylesheets/scss/detail.scss'

class Detail extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      showNewReview: false,
    }
  }

  componentWillMount() {
    getSake( this.props.dispatch, this.props.params.sakeId )
  }

  toggleNewReview() {
    this.setState({ showNewReview: !this.state.showNewReview })
  }

  render() {
    return (
      <div>
        <div>
          {this.props.sake.名前} ( {this.props.sake.種類} )
        </div>
        <div>
          {this.props.sake.蔵元} ( {this.props.sake.都道府県} )
        </div>
        <div>
          <img src={ this.props.sake.画像URL } className={ styles.img } />
        </div>

        <table className={styles.table}>
              { Object.keys(this.props.sake).map( key => {
                return(
                  <tr className={styles.tr}>
                    <th className={styles.th}>{ key }</th>
                    <td className={styles.td}>{ this.props.sake[key] }</td>
                  </tr>
                )
              } ) }
        </table>

        <FlatButton label="レビューする" primary={true} onClick={this.toggleNewReview.bind(this)} />
        { this.state.showNewReview ? <NewReview sakeId={this.props.sake._id} /> : null }

      </div>
    )
  }
}

Detail.propTypes = {
  dispatch: PropTypes.func.isRequired,
  params: PropTypes.object.isRequired,
  sake: PropTypes.object.isRequired,
}

const mapStateToProps = state => state
export default connect( mapStateToProps )( Detail )
