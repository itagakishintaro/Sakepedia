import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
// actions
import { getSakeList, getNames, getBreweries, getPrefectures } from '../actions/sake'
// material-ui
import List from '../Components/List'
// components
import Search from '../components/Search'

class SearchContainer extends React.Component {
  constructor(props) {
    super(props)
    this.search = this.search.bind(this)
    getNames( this.props.dispatch )
    getBreweries( this.props.dispatch )
    getPrefectures( this.props.dispatch )
  }

  search( query ) {
    getSakeList( this.props.dispatch, query )
  }

  render() {
    return(
      <div>
        <Search
          names = {this.props.names}
          breweries = {this.props.breweries}
          prefectures = {this.props.prefectures}
          search = {this.search}
        />
        <List list={this.props.list}/>
      </div>
    )
  }
}

SearchContainer.propTypes = {
  dispatch: PropTypes.func.isRequired,
  list: PropTypes.array.isRequired,
  names: PropTypes.array.isRequired,
  breweries: PropTypes.array.isRequired,
  prefectures: PropTypes.array.isRequired,
}

const mapStateToProps = state => state
export default connect( mapStateToProps )( SearchContainer )
