import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
// actions
import { getSakeList, setSakeList } from '../actions/sake'
// material-ui
import MyList from '../Components/MyList'
// components
import MySearch from '../components/MySearch'

class MypageContainer extends React.Component {
  constructor(props) {
    super(props)
    setSakeList( {} )
    this.search = this.search.bind(this)
  }

  search( query ) {
    setSakeList( {} )
    getSakeList( this.props.dispatch, query )
  }

  render() {
    return(
      <div>
        <MySearch
          search = {this.search}
        />
      <MyList list={this.props.list}/>
      </div>
    )
  }
}

MypageContainer.propTypes = {
  dispatch: PropTypes.func.isRequired,
  list: PropTypes.array.isRequired,
}

const mapStateToProps = state => state
export default connect( mapStateToProps )( MypageContainer )
