import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
// material-ui
import AutoComplete from 'material-ui/AutoComplete'
import FontIcon from 'material-ui/FontIcon'
import List from './List'
import {Tabs, Tab} from 'material-ui/Tabs'
import RaisedButton from 'material-ui/RaisedButton'
// actions
import { getSakeList, getNames, getBreweries, getPrefectures } from '../actions/sake'
// components
import Prefectures from '../components/Prefectures'

class Search extends React.Component {
  constructor(props) {
    super(props)
    getNames( this.props.dispatch )
    getBreweries( this.props.dispatch )
    getPrefectures( this.props.dispatch )
    this.state = {
      prefecture: '',
    }
  }

  detailSearch() {
    this.search( this.props.dispatch, {
      prefecture: this.state.prefecture,
      brewrey: document.getElementById('brewrey').value,
      name: document.getElementById('name').value
    }  )
  }

  search( dispatch, query ) {
    getSakeList( dispatch, query )
  }

  setPrefecture(pref) {
    this.setState( { prefecture: pref } )
  }

  render() {
    const styles = {
      icon: {
        color: 'gray',
      },
      tabItemContainer: {
        'backgroundColor': 'lightgray',
      },
    }
    return (
      <div>
        <Tabs tabItemContainerStyle={ styles.tabItemContainer } >
          <Tab label="銘柄検索" >
            <AutoComplete
              hintText={ <span><FontIcon className="material-icons" style={styles.icon}>search</FontIcon>銘柄</span> }
              dataSource={ this.props.names }
              fullWidth={true}
              onNewRequest={ ( name ) => { this.search( this.props.dispatch, { name } ) } }
            />
          </Tab>
          <Tab label="詳細検索" >
            <Prefectures label="都道府県" setPrefecture={this.setPrefecture.bind(this)} />
            <AutoComplete
              id="brewrey"
              floatingLabelFixed={true}
              floatingLabelText="蔵元"
              dataSource={ this.props.breweries }
              fullWidth={true}
            />
            <AutoComplete
              id="name"
              floatingLabelFixed={true}
              floatingLabelText="銘柄"
              dataSource={ this.props.names }
              fullWidth={true}
            />
            <RaisedButton label="検索" primary={true} onClick={this.detailSearch.bind(this)} />
          </Tab>
        </Tabs>

        <List />
      </div>
    )
  }
}

Search.propTypes = {
  dispatch: PropTypes.func.isRequired,
  list: PropTypes.array.isRequired,
  names: PropTypes.array.isRequired,
  breweries: PropTypes.array.isRequired,
  prefectures: PropTypes.array.isRequired,
}

const mapStateToProps = state => state
export default connect( mapStateToProps )( Search )
