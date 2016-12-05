import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
// actions
import { getBrands, getSakeYeasts, getRices } from '../actions/sake'
import { getAllBreweries } from '../actions/brewery'
// components
import NewSake from '../components/NewSake'

class NewSakeContainer extends React.Component {
  constructor(props) {
    super(props)
    getBrands( this.props.dispatch )
    getAllBreweries( this.props.dispatch )
    getRices( this.props.dispatch )
    getSakeYeasts( this.props.dispatch )
    this.sake = {}
  }

  render() {
    if( this.props.location.query.sakeId ) {
      this.sake = this.props.sake
    }
    return (
      <NewSake
        brands = {this.props.brands}
        breweries = { this.props.allBreweries }
        sake = {this.sake}
        sakeYeasts = {this.props.sakeYeasts}
        rices = {this.props.rices}
      />
    )
  }
}

NewSakeContainer.propTypes = {
  brands: PropTypes.array.isRequired,
  breweries: PropTypes.array.isRequired,
  dispatch: PropTypes.func.isRequired,
  location: PropTypes.Object,
  rices: PropTypes.array.isRequired,
  sake: PropTypes.Object,
  sakeYeasts: PropTypes.array.isRequired,
}

const mapStateToProps = state => state
export default connect( mapStateToProps )( NewSakeContainer )
