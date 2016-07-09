import React, { PropTypes } from 'react'
import AutoComplete from 'material-ui/AutoComplete'
import {Toolbar, ToolbarGroup} from 'material-ui/Toolbar';
import FontIcon from 'material-ui/FontIcon';
import List from './List'
import { connect } from 'react-redux'
import { getSakeList } from '../actions'

const words=[
  '板垣',
  '真太郎',
]

class Search extends React.Component {
  componentWillMount() {
    getSakeList( this.props.dispatch )
  }

  search() {
    console.log('search')
  }

  render() {
    const searchBarStyles = {
      fontSize: '3em',
    }
    const iconStyles = {
      fontSize: '3em',
      color: 'gray',
    }
    return (
      <div>
        <div>
            <AutoComplete
              hintText={<FontIcon className="material-icons" style={iconStyles}>search</FontIcon>}
              dataSource={words}
              onUpdateInput={this.handleUpdateInput}
              fullWidth={true}
              style={ searchBarStyles }
              onNewRequest= { this.search }
            />
          </div>
        <List />
      </div>
    )
  }
}

Search.propTypes = {
  dispatch: PropTypes.func.isRequired,
  list: PropTypes.array.isRequired,
}

const mapStateToProps = state => state
export default connect( mapStateToProps )( Search )
