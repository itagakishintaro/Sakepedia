import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { getSake } from '../actions'
import {Tabs, Tab} from 'material-ui/Tabs'
import FontIcon from 'material-ui/FontIcon'
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
    const tabStyles = {
      contentContainer: {
        'margin': '1em 0',
      },
      tabItemContainer: {
        'backgroundColor': 'lightgray',
      },
    }
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

        <Tabs tabItemContainerStyle={ tabStyles.tabItemContainer } contentContainerStyle={tabStyles.contentContainer}>
          <Tab
            icon={<FontIcon className="material-icons">details</FontIcon>}
            label="詳細"
          >
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
          </Tab>
          <Tab
            icon={<FontIcon className="material-icons">people</FontIcon>}
            label="レビュー"
          >
          </Tab>
          <Tab
            icon={<FontIcon className="material-icons">chat_bubble_outline</FontIcon>}
            label="レビューする"
          >
            <NewReview sakeId={this.props.sake._id} />
          </Tab>
        </Tabs>
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
