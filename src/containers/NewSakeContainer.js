import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
// actions
import { getBrands, getBreweries, getSakeYeasts, getRices } from '../actions/sake'
// components
import NewSake from '../components/NewSake'

class NewSakeContainer extends React.Component {
  constructor(props) {
    super(props)
    getBrands( this.props.dispatch )
    getBreweries( this.props.dispatch )
    getRices( this.props.dispatch )
    getSakeYeasts( this.props.dispatch )
  }

  render() {
    return (
      <NewSake
        brands = {this.props.brands}
        breweries = {this.props.breweries}
        sakeYeasts = {this.props.sakeYeasts}
        rices = {this.props.rices}
      />
    )
  }
}

NewSakeContainer.propTypes = {
  dispatch: PropTypes.func.isRequired,
  brands: PropTypes.array.isRequired,
  breweries: PropTypes.array.isRequired,
  sakeYeasts: PropTypes.array.isRequired,
  rices: PropTypes.array.isRequired,
}

const mapStateToProps = state => state
export default connect( mapStateToProps )( NewSakeContainer )
