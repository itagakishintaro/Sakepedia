import React, { PropTypes } from 'react'
// material-ui
import AutoComplete from 'material-ui/AutoComplete'
import FontIcon from 'material-ui/FontIcon'
import {Tabs, Tab} from 'material-ui/Tabs'
import RaisedButton from 'material-ui/RaisedButton'
// components
import Prefectures from '../components/Prefectures'

class Search extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      prefecture: '',
    }
    this.detailSearch = this.detailSearch.bind(this)
    this.search = this.search.bind(this)
  }

  detailSearch() {
    this.props.search(
      {
        prefecture: this.state.prefecture,
        brewrey: document.getElementById('brewrey').value,
        brand: document.getElementById('brand').value,
      }
   )
  }

  search( brand ) {
    this.props.search( { brand } )
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
              dataSource={ this.props.brands }
              fullWidth={true}
              onNewRequest={ this.search }
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
              id="brand"
              floatingLabelFixed={true}
              floatingLabelText="銘柄"
              dataSource={ this.props.brands }
              fullWidth={true}
            />
          <RaisedButton
            label="検索"
            primary={true}
            onClick={ this.detailSearch } />
          </Tab>
        </Tabs>
      </div>
    )
  }
}

Search.propTypes = {
  detailSearch: PropTypes.func.isRequired,
  brands: PropTypes.array.isRequired,
  breweries: PropTypes.array.isRequired,
  search: PropTypes.func.isRequired,
}

export default Search
