import React, { PropTypes } from 'react'
import { Link } from 'react-router'
// material-ui
import {Tabs, Tab} from 'material-ui/Tabs'
import FontIcon from 'material-ui/FontIcon'
import RaisedButton from 'material-ui/RaisedButton'
// css
import classes from '../../public/stylesheets/scss/detail.scss'
// components
import DetailInfo from './DetailInfo'
import NewReview from './NewReview'
import Reviews from './Reviews'

class Detail extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      review: {},
      tab: this.props.initialTab,
    }
  }

  changeTab( tab ) {
    this.setState({ tab })
  }

  setReview( review ) {
    this.setState({ review })
  }

  render() {
    const styles = {
      button: {
        margin: '1em 0',
      },
      contentContainer: {
        'margin': '1em 0',
      },
      tabItemContainer: {
        'backgroundColor': 'lightgray',
      },
      displayWhenLoggedIn: {
        display: 'none',
      },
      displayWhenLoggedOut: {
        display: 'none',
      },
    }
    if( this.props.isLogin ) {
      styles.displayWhenLoggedIn.display = 'block'
    }
    if( !this.props.isLogin ) {
      styles.displayWhenLoggedOut.display = 'block'
    }
    return (
      <div>
        <div className={classes.header}>
          <img src={ this.props.sake.image } className={classes.image} />
          <div>
            <div><span className={classes.title}>{this.props.sake.brand}　{this.props.sake.subname}</span>( {this.props.sake.type} )</div>
            <div>{this.props.sake.brewery} ( {this.props.sake.prefecture} )</div>
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
            onActive={ () => { this.changeTab('detail') } }
            value="detail"
          >
            <DetailInfo sake={this.props.sake}/>
            <div style={styles.displayWhenLoggedIn}>
              <Link to={'/sake/new'} query={{ sakeId: this.props.sake._id }}><RaisedButton label="更新" primary={true} style={styles.button} /></Link>
            </div>
          </Tab>
          <Tab
            id="reviews"
            icon={<FontIcon className="material-icons">people</FontIcon>}
            label="レビュー"
            onActive={ () => { this.changeTab('reviews') } }
            value="reviews"
          >
          <Reviews
            reviews={this.props.sake.reviews}
            changeTab={this.changeTab.bind(this)}
            setReview={this.setReview.bind(this)}
           />
          </Tab>
          <Tab
            id="createReview"
            icon={<FontIcon className="material-icons">chat_bubble_outline</FontIcon>}
            label="レビューする"
            onActive={ () => { this.changeTab('createReview') } }
            value="createReview"
          >
            <NewReview
              changeTab={this.changeTab.bind(this)}
              sake={this.props.sake}
              update={this.props.update}
              isLogin={this.props.isLogin}
              review={this.state.review}
             />
           <div style={styles.displayWhenLoggedOut}>
             <p>ログインしてください。</p>
             <Link to={'/login'} query={{ sakeId: this.props.sake._id }}><RaisedButton label="ログイン" /></Link>
           </div>
          </Tab>
        </Tabs>
      </div>
    )
  }
}

Detail.propTypes = {
  initialTab: PropTypes.string.isRequired,
  isLogin: PropTypes.bool.isRequired,
  sake: PropTypes.object.isRequired,
  update: PropTypes.func.isRequired,
}

export default Detail
