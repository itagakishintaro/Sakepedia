import React, { PropTypes } from 'react'
import AutoComplete from 'material-ui/AutoComplete'
import FontIcon from 'material-ui/FontIcon'
import {Tabs, Tab} from 'material-ui/Tabs'
import RaisedButton from 'material-ui/RaisedButton'
import List from './List'
import { connect } from 'react-redux'
import { getSakeList, getSakeListByDetail } from '../actions'

const words=[
  '板垣',
  '真太郎',
]

class Search extends React.Component {
  constructor(props) {
    super(props)
    this.state = {value: 1}
  }

  componentWillMount() {
    // getSakeList( this.props.dispatch )
  }

componentDidMount(){
  document.getElementById('detailSearch').addEventListener('click', () => {
    console.log('detailSearch');
    this.search( this.props.dispatch, {
      prefecture: document.getElementById('prefecture').value,
      brewrey: document.getElementById('brewrey').value,
      name: document.getElementById('name').value
    } );
  } )
}

  search(dispatch, words) {
    console.log('search event', words)
    getSakeList( dispatch, words )
  }

  render() {
    const iconStyles = {
      color: 'gray',
    }
    return (
      <div>
        <Tabs tabItemContainerStyle={{'backgroundColor': 'lightgray'}} inkBarStyle={{'color': 'gray'}}>
          <Tab label="銘柄検索" >
            <AutoComplete
              hintText={ <span><FontIcon className="material-icons" style={iconStyles}>search</FontIcon>銘柄</span> }
              dataSource={words}
              fullWidth={true}
              onNewRequest={ ( name ) => { this.search( this.props.dispatch, { name } ) } }
            />
          </Tab>
          <Tab label="詳細検索" >
            <AutoComplete
              id="prefecture"
              hintText={ <span><FontIcon className="material-icons" style={iconStyles}>search</FontIcon>都道府県</span> }
              dataSource={words}
              fullWidth={true}
            />
            <AutoComplete
              id="brewrey"
              hintText={ <span><FontIcon className="material-icons" style={iconStyles}>search</FontIcon>蔵元</span> }
              dataSource={words}
              fullWidth={true}
            />
            <AutoComplete
              id="name"
              hintText={ <span><FontIcon className="material-icons" style={iconStyles}>search</FontIcon>銘柄</span> }
              dataSource={words}
              fullWidth={true}
            />
            <RaisedButton id="detailSearch" label="検索" primary={true} />
          </Tab>
        </Tabs>

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
