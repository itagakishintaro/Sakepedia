import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import TextField from 'material-ui/TextField'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'
// import AutoComplete from 'material-ui/AutoComplete'

class New extends React.Component {
  constructor(props) {
    super(props);
    this.state = {category: 0};
  }

  render() {
    return (
      <div>
        <h1>新規登録</h1>
        <form>
          <TextField
            hintText="銘柄"
            fullWidth="true"
          />
          <SelectField
            hintText="分類"
            fullWidth="true"
            value={this.state.category}
            onChange={ (event, index, value) => this.setState( { category: value } ) } >
            <MenuItem value={1} primaryText="純米大吟醸" />
            <MenuItem value={2} primaryText="大吟醸" />
            <MenuItem value={3} primaryText="純米吟醸" />
            <MenuItem value={4} primaryText="吟醸" />
            <MenuItem value={5} primaryText="特別純米" />
            <MenuItem value={6} primaryText="特別本醸造" />
            <MenuItem value={7} primaryText="純米" />
            <MenuItem value={8} primaryText="本醸造" />
            <MenuItem value={9} primaryText="普通" />
          </SelectField>
          <TextField
            hintText="その他（銘柄、分類以外の副名）"
            fullWidth="true"
          />
        </form>
      </div>
    )
  }
}

New.propTypes = {
  dispatch: PropTypes.func.isRequired,
  list: PropTypes.array.isRequired,
}

const mapStateToProps = state => state
export default connect( mapStateToProps )( New )
