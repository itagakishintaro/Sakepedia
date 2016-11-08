import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
// actions
import { getSakeList, getBrands, getBreweries, setSakeList } from '../actions/sake'
// material-ui
import List from '../Components/List'
// components
import Search from '../components/Search'

class SearchContainer extends React.Component {
  constructor(props) {
    super(props)
    setSakeList( {} )
    this.search = this.search.bind(this)
    getBrands( this.props.dispatch )
    getBreweries( this.props.dispatch )
  }

  search( query ) {
    setSakeList( {} )
    getSakeList( this.props.dispatch, query )
  }

  render() {
    return(
      <div>
        <Search
          brands = {this.props.brands}
          breweries = {this.props.breweries}
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
  brands: PropTypes.array.isRequired,
  breweries: PropTypes.array.isRequired,
}

const mapStateToProps = state => state
export default connect( mapStateToProps )( SearchContainer )
