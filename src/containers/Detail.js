import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
// material-ui
import {Tabs, Tab} from 'material-ui/Tabs'
import FontIcon from 'material-ui/FontIcon'
// css
import classes from '../../public/stylesheets/scss/detail.scss'
// actions
import { getSake } from '../actions/sake'
// components
import NewReview from './NewReview'

class Detail extends React.Component{
  componentWillMount() {
    getSake( this.props.dispatch, this.props.params.sakeId )
  }

  render() {
    const styles = {
      contentContainer: {
        'margin': '1em 0',
      },
      tabItemContainer: {
        'backgroundColor': 'lightgray',
      },
    }
    return (
      <div>
        <div className={classes.header}>
          <img src={ this.props.sake.画像URL } className={classes.image} />
          <div>
            <div><span className={classes.title}>{this.props.sake.名前}</span>( {this.props.sake.種類} )</div>
            <div>{this.props.sake.蔵元} ( {this.props.sake.都道府県} )</div>
          </div>
        </div>

        <Tabs tabItemContainerStyle={ styles.tabItemContainer } contentContainerStyle={styles.contentContainer}>
          <Tab
            icon={<FontIcon className="material-icons">details</FontIcon>}
            label="詳細"
          >
            <table className={classes.table}>
                  { Object.keys(this.props.sake).map( key => {
                    return(
                      <tr className={classes.tr}>
                        <th className={classes.th}>{ key }</th>
                        <td className={classes.td}>{ this.props.sake[key] }</td>
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
