import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
// actions
import { getMySakeList, setMySakeList } from '../actions/sake'
// material-ui
import List from '../Components/List'
// components
import MySearch from '../components/MySearch'

class MypageContainer extends React.Component {
  constructor(props) {
    super(props)
    setMySakeList( [] )
    this.search = this.search.bind(this)
  }

  search( query ) {
    setMySakeList( [] )
    getMySakeList( this.props.dispatch, query )
  }

  render() {
    return(
      <div>
        <MySearch
          search = {this.search}
        />
      <List list={this.props.mylist} card="mycard"/>
      </div>
    )
  }
}

MypageContainer.propTypes = {
  dispatch: PropTypes.func.isRequired,
  mylist: PropTypes.array.isRequired,
}

const mapStateToProps = state => state
export default connect( mapStateToProps )( MypageContainer )
