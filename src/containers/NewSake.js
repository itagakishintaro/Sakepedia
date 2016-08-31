import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
// material-ui
import AutoComplete from 'material-ui/AutoComplete'
import MenuItem from 'material-ui/MenuItem'
import SelectField from 'material-ui/SelectField'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
// lib
import axios from 'axios'
// components
import Prefectures from '../components/Prefectures'
// validation
import validate from './NewSakeValidation'

class NewSake extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      acidRate: '',
      alcoholRate: '',
      aminoRate: '',
      brands: [],
      breweries: [],
      category: '',
      error: false,
      errorText: {},
      koubo: [],
      polishRate: '',
      prefecture: '',
      prefectures: [],
      process: '',
      riceOfKake: [],
      riceOfKouji: [],
      sakeRate: '',
    }
  }

  send(){
    let validation = validate( this.state )
    this.setState( { errorText: validation.errorText } )
    if ( validation.error ) {
      return
    }
    axios.post( '/api/sakes' , {
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

    window.location.href ='/'
  }

  setPrefecture(pref) {
    this.setState( { prefecture: pref } )
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
            dataSource={this.state.brands}
            errorText={this.state.errorText.brand}
            floatingLabelFixed={true}
            floatingLabelText="銘柄*"
            fullWidth={true}
            required={true}
          />
          <SelectField
            id="category"
            errorText={this.state.errorText.category}
            floatingLabelFixed={true}
            floatingLabelText="分類*"
            fullWidth={true}
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
            errorText={this.state.errorText.process}
            floatingLabelFixed={true}
            floatingLabelText="製法*"
            fullWidth={true}
            value={this.state.process}
            onChange={ (event, index, value) => this.setState( { process: value } ) } >
            <MenuItem value={1} primaryText="速醸酛" />
            <MenuItem value={2} primaryText="山廃酛" />
            <MenuItem value={3} primaryText="生酛" />
          </SelectField>
          <TextField
            id="subname"
            floatingLabelFixed={true}
            floatingLabelText="その他（銘柄、分類以外の副名）"
            fullWidth={true}
          />
          <TextField
            id="url"
            errorText={this.state.errorText.url}
            floatingLabelFixed={true}
            floatingLabelText="メーカーURL"
            fullWidth={true}
            type="url"
          />
          <AutoComplete
            id="brewery"
            dataSource={this.state.breweries}
            errorText={this.state.errorText.brewery}
            floatingLabelFixed={true}
            floatingLabelText="蔵元*"
            fullWidth={true}
            required={true}
          />

        <Prefectures
          errorText={this.state.errorText.prefecture}
          label="都道府県*"
          setPrefecture={this.setPrefecture.bind(this)}
        />

          <AutoComplete
            id="riceOfKouji"
            floatingLabelFixed={true}
            floatingLabelText="麹米"
            dataSource={this.state.riceOfKouji}
            fullWidth={true}
          />
          <AutoComplete
            id="riceOfKake"
            floatingLabelFixed={true}
            floatingLabelText="掛米"
            dataSource={this.state.riceOfKake}
            fullWidth={true}
          />
          <AutoComplete
            id="koubo"
            floatingLabelFixed={true}
            floatingLabelText="酵母"
            dataSource={this.state.koubo}
            fullWidth={true}
          />

          <TextField
            id="polishRate"
            errorText={this.state.errorText.polishRate}
            floatingLabelFixed={true}
            floatingLabelText="精米歩合(%)"
            fullWidth={true}
            step="0.1"
            type="number"
          />
          <TextField
            id="alcoholRate"
            errorText={this.state.errorText.alcoholRate}
            floatingLabelFixed={true}
            floatingLabelText="アルコール度数(%)"
            fullWidth={true}
            step="0.1"
            type="number"
          />
          <TextField
            id="sakeRate"
            errorText={this.state.errorText.sakeRate}
            floatingLabelFixed={true}
            floatingLabelText="日本酒度"
            fullWidth={true}
            step="0.1"
            type="number"
          />
          <TextField
            id="acidRate"
            errorText={this.state.errorText.acidRate}
            floatingLabelFixed={true}
            floatingLabelText="酸度"
            fullWidth={true}
            step="0.1"
            type="number"
          />
          <TextField
            id="aminoRate"
            errorText={this.state.errorText.aminoRate}
            floatingLabelFixed={true}
            floatingLabelText="アミノ酸度"
            fullWidth={true}
            step="0.1"
            type="number"
          />
          <div id="picture">画像（準備中）</div>

          <RaisedButton label="登録" primary={true} style={styles.button} onClick={this.send.bind(this)} />
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
