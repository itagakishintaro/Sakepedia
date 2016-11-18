import React, { PropTypes } from 'react'
// material-ui
import DatePicker from 'material-ui/DatePicker'
import RaisedButton from 'material-ui/RaisedButton'

class MySearch extends React.Component {
  constructor(props) {
    super(props)
    this.detailSearch = this.detailSearch.bind(this)
    this.handleChangeFrom = this.handleChangeFrom.bind(this)
    this.handleChangeTo = this.handleChangeTo.bind(this)

    let from = new Date()
    let to = new Date()
    from.setMonth(from.getMonth() - 1)
    from.setHours(0, 0, 0, 0)
    to.setHours(0, 0, 0, 0)
    this.state = {
      from,
      to,
    };

  }

  detailSearch() {
    let query = {
      'reviews.userid': window.localStorage.getItem( 'userid' ),
      from: this.state.from.toISOString(),
      to: this.state.to.toISOString(),
    }
    this.props.search( query )
  }

  handleChangeFrom(event, date) {
    let from = new Date(date)
    from.setHours(0, 0, 0, 0)
    this.setState({
      from,
    })
  }

  handleChangeTo(event, date) {
    let to = new Date(date)
    to.setHours(0, 0, 0, 0)
    this.setState({
      to,
    })
  }

  render() {
    const styles = {
      button: {
        marginTop: '1em',
      },
    }
    return (
      <div>
        <p>自分がレビューしたお酒を検索します。</p>
        <DatePicker
            onChange={this.handleChangeFrom}
            floatingLabelText="この日から"
            defaultDate={this.state.from}
            fullWidth={true}
          />
          <DatePicker
              onChange={this.handleChangeTo}
              floatingLabelText="この日まで"
              defaultDate={this.state.to}
              fullWidth={true}
            />
          <RaisedButton
            label="検索"
            primary={true}
            onTouchTap={ this.detailSearch }
            style={ styles.button } />
      </div>
    )
  }
}

MySearch.propTypes = {
  detailSearch: PropTypes.func.isRequired,
  search: PropTypes.func.isRequired,
}

export default MySearch
