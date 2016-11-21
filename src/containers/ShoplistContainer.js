import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
// actions
import { getShoplist } from '../actions/shoplist'
// components
import Shoplist from '../components/Shoplist'

class ShoplistContainer extends React.Component {
  constructor(props) {
    super(props)
    getShoplist( this.props.dispatch )
  }

  render() {
    return(
      <div>
        <Shoplist
          shoplist = {this.props.shoplist}
        />
      </div>
    )
  }
}

ShoplistContainer.propTypes = {
  dispatch: PropTypes.func.isRequired,
  shoplist: PropTypes.array.isRequired,
}

const mapStateToProps = state => state
export default connect( mapStateToProps )( ShoplistContainer )
