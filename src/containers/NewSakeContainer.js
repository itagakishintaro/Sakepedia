import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
// actions
import { getBrands, getBreweries, getKoubos, getRices } from '../actions/sake'
// components
import NewSake from '../components/NewSake'

class NewSakeContainer extends React.Component {
  constructor(props) {
    super(props)
    getBrands( this.props.dispatch )
    getBreweries( this.props.dispatch )
    getRices( this.props.dispatch )
    getKoubos( this.props.dispatch )
  }

  render() {
    return (
      <NewSake
        brands = {this.props.brands}
        breweries = {this.props.breweries}
        koubos = {this.props.koubos}
        rices = {this.props.rices}
      />
    )
  }
}

NewSakeContainer.propTypes = {
  dispatch: PropTypes.func.isRequired,
  brands: PropTypes.array.isRequired,
  breweries: PropTypes.array.isRequired,
  koubos: PropTypes.array.isRequired,
  rices: PropTypes.array.isRequired,
}

const mapStateToProps = state => state
export default connect( mapStateToProps )( NewSakeContainer )
