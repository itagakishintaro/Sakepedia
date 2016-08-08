import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import TextField from 'material-ui/TextField'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'
import AutoComplete from 'material-ui/AutoComplete'
import RaisedButton from 'material-ui/RaisedButton'
import axios from 'axios'

class NewSake extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      acidRate: '',
      alcoholRate: '',
      aminoRate: '',
      brands: [],
      breweries: [],
      category: '',
      koubo: [],
      polishRate: '',
      prefectures: [],
      process: '',
      riceOfKake: [],
      riceOfKouji: [],
      sakeRate: '',
    }
  }

  send(){
    axios.post( '/api/sake' , {
      brand: document.getElementById('brand').value,
      category: this.state.category,
      process: this.state.process,
      subname: document.getElementById('subname').value,
      url: document.getElementById('url').value,
      brewery: document.getElementById('brewery').value,
      prefecture: document.getElementById('prefecture').value,
      riceOfKouji: document.getElementById('riceOfKouji').value,
      riceOfKake: document.getElementById('riceOfKake').value,
      koubo: document.getElementById('koubo').value,
      polishRate: this.state.polishRate,
      alcoholRate: this.state.alcoholRate,
      sakeRate: this.state.sakeRate,
      acidRate: this.state.acidRate,
      aminoRate: this.state.aminoRate,
      picture: '',
    })
    .then( res => {
      console.log( res )
    })
    .catch( error => {
      console.log( error )
    })
  }

  render() {
    const styles = {
      button: {
        margin: '1em 0',
      },
    }
    return (
      <div>
          <AutoComplete
            id="brand"
            hintText="銘柄*"
            dataSource={this.state.brands}
            fullWidth="true"
          />
          <SelectField
            id="category"
            floatingLabelText="分類*"
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
          <SelectField
            id="process"
            floatingLabelText="製法*"
            fullWidth="true"
            value={this.state.process}
            onChange={ (event, index, value) => this.setState( { process: value } ) } >
            <MenuItem value={1} primaryText="速醸酛" />
            <MenuItem value={2} primaryText="山廃酛" />
            <MenuItem value={3} primaryText="生酛" />
          </SelectField>
          <TextField
            id="subname"
            hintText="その他（銘柄、分類以外の副名）"
            fullWidth="true"
          />
          <TextField
            id="url"
            hintText="メーカーURL"
            fullWidth="true"
          />
          <AutoComplete
            id="brewery"
            hintText="蔵元*"
            dataSource={this.state.breweries}
            fullWidth="true"
          />
          <AutoComplete
            id="prefecture"
            hintText="都道府県*"
            dataSource={this.state.prefectures}
            fullWidth="true"
          />
          <AutoComplete
            id="riceOfKouji"
            hintText="麹米"
            dataSource={this.state.riceOfKouji}
            fullWidth="true"
          />
          <AutoComplete
            id="riceOfKake"
            hintText="掛米"
            dataSource={this.state.riceOfKake}
            fullWidth="true"
          />
          <AutoComplete
            id="koubo"
            hintText="酵母"
            dataSource={this.state.koubo}
            fullWidth="true"
          />

          <TextField
            id="polishRate"
            hintText="精米歩合"
            fullWidth="true"
          />
          <TextField
            id="alcoholRate"
            hintText="アルコール度数(%)"
            fullWidth="true"
          />
          <TextField
            id="sakeRate"
            hintText="日本酒度"
            fullWidth="true"
          />
          <TextField
            id="acidRate"
            hintText="酸度"
            fullWidth="true"
          />
          <TextField
            id="aminoRate"
            hintText="アミノ酸度"
            fullWidth="true"
          />
          <div id="picture">画像（準備中）</div>

          <RaisedButton label="登録" primary="true" style={styles.button} onClick={this.send.bind(this)} />
      </div>
    )
  }
}

NewSake.propTypes = {
  dispatch: PropTypes.func.isRequired,
  list: PropTypes.array.isRequired,
}

const mapStateToProps = state => state
export default connect( mapStateToProps )( NewSake )
