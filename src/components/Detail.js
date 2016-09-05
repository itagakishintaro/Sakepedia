import React, { PropTypes } from 'react'
// material-ui
import {Tabs, Tab} from 'material-ui/Tabs'
import FontIcon from 'material-ui/FontIcon'
// css
import classes from '../../public/stylesheets/scss/detail.scss'
// components
import NewReview from './NewReview'
import Reviews from './Reviews'

class Detail extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      tab: this.props.initialTab,
    }
  }

  changeTab( tab ) {
    this.props.changeTab( tab )
    this.setState({ tab })
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
    const items = [
      '銘柄名',
      '種類',
      '酒母',
      'その他',
      'メーカーURL',
      '蔵元',
      '都道府県',
      '麹米',
      '掛米',
      '酵母',
      '精米歩合',
      'アルコール度数',
      '日本酒度',
      '酸度',
      'アミノ酸度',
      '説明',
    ]
    let setAnchor = ( input ) => {
      if( /http/.test( input ) ){
        return <a href={input} target="_blank">{input}</a>
      }
      return input
    }
    return (
      <div>
        <div className={classes.header}>
          <img src={ this.props.sake.画像URL } className={classes.image} />
          <div>
            <div><span className={classes.title}>{this.props.sake.銘柄名}</span>( {this.props.sake.種類} )</div>
            <div>{this.props.sake.蔵元} ( {this.props.sake.都道府県} )</div>
          </div>
        </div>

        <Tabs
          contentContainerStyle={styles.contentContainer}
          tabItemContainerStyle={styles.tabItemContainer}
          value={this.state.tab} >
          <Tab
             id="detail"
            icon={<FontIcon className="material-icons">details</FontIcon>}
            label="詳細"
            onClick={ () => { this.changeTab('detail') } }
            value="detail"
          >
            <table className={classes.table}>
                  { items.map( key => {
                    return(
                      <tr className={classes.tr}>
                        <th className={classes.th} width="25%">{ key }</th>
                        <td className={classes.td}>
                            { setAnchor( this.props.sake[key] ) }
                        </td>
                      </tr>
                    )
                  } ) }
            </table>
          </Tab>
          <Tab
            id="reviews"
            icon={<FontIcon className="material-icons">people</FontIcon>}
            label="レビュー"
            onClick={ () => { this.changeTab('reviews') } }
            value="reviews"
          >
          <Reviews reviews={this.props.reviews} />
          </Tab>
          <Tab
            id="createReview"
            icon={<FontIcon className="material-icons">chat_bubble_outline</FontIcon>}
            label="レビューする"
            onClick={ () => { this.changeTab('createReview') } }
            value="createReview"
          >
            <NewReview
              changeTab={this.changeTab.bind(this)}
             />
          </Tab>
        </Tabs>
      </div>
    )
  }
}

Detail.propTypes = {
  changeTab: PropTypes.func.isRequired,
  initialTab: PropTypes.string.isRequired,
  sake: PropTypes.object.isRequired,
  reviews: PropTypes.object.isRequired,
}

export default Detail
