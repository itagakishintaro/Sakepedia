import React, { PropTypes } from 'react'
// material-ui
import AutoComplete from 'material-ui/AutoComplete'
import MenuItem from 'material-ui/MenuItem'
import SelectField from 'material-ui/SelectField'
import Snackbar from 'material-ui/Snackbar'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
// lib
import axios from 'axios'
// components
import Camera from './Camera'
import Prefectures from './Prefectures'
// validation
import validate from './NewSakeValidation'
// util
import smoothScroll from '../util/smoothScroll'

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
      snackbarOpen: false,
    }
  }

  send(){
    let validation = validate( this.state )
    this.setState( { errorText: validation.errorText } )
    if ( validation.error ) {
      smoothScroll( document.getElementById('newSake'), 1000 )
      return
    }
    axios.post( '/api/sakes' , {
      '銘柄名': document.getElementById('brand').value,
      '種類': this.state.category,
      '酒母': this.state.process,
      'その他': document.getElementById('subname').value,
      'メーカーURL': document.getElementById('url').value,
      '蔵元': document.getElementById('brewery').value,
      '都道府県': this.state.prefecture,
      '麹米': document.getElementById('riceOfKouji').value,
      '掛米': document.getElementById('riceOfKake').value,
      '酵母': document.getElementById('koubo').value,
      '精米歩合': this.state.polishRate,
      'アルコール度数': this.state.alcoholRate,
      '日本酒度': this.state.sakeRate,
      '酸度': this.state.acidRate,
      'アミノ酸度': this.state.aminoRate,
      '説明': document.getElementById('description').value,
      '画像URL': document.getElementById('snap').src,
      '日時': new Date(),
      'ユーザーID': window.localStorage.getItem( 'id' ),
      'ユーザー名': window.localStorage.getItem( 'name' ),
    })
    .then( () => {
      window.location.href ='/'
    })
    .catch( error => {
      document.getElementById('error').textContent = JSON.stringify(error)
      smoothScroll( document.getElementById('error'), 100)
    })
    this.openSnackbar()
  }

  setPrefecture(prefecture) {
    this.setState( { prefecture } )
  }

  openSnackbar() {
    this.setState({ snackbarOpen: true })
  }

  closeSnackbar() {
    this.setState({ snackbarOpen: false })
  }

  render() {
    const styles = {
      button: {
        margin: '1em 0',
      },
    }
    return (
      <div id="newSake">
        <Snackbar
          open={this.state.snackbarOpen}
          message="送信しました"
          autoHideDuration={1000}
          onRequestClose={this.closeSnackbar.bind(this)}
        />
          <AutoComplete
            id="brand"
            dataSource={this.props.brands}
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
            <MenuItem value="純米大吟醸" primaryText="純米大吟醸" />
            <MenuItem value="大吟醸" primaryText="大吟醸" />
            <MenuItem value="純米吟醸" primaryText="純米吟醸" />
            <MenuItem value="吟醸" primaryText="吟醸" />
            <MenuItem value="特別純米" primaryText="特別純米" />
            <MenuItem value="特別本醸造" primaryText="特別本醸造" />
            <MenuItem value="純米" primaryText="純米" />
            <MenuItem value="本醸造" primaryText="本醸造" />
            <MenuItem value="普通" primaryText="普通" />
          </SelectField>
          <SelectField
            id="process"
            errorText={this.state.errorText.process}
            floatingLabelFixed={true}
            floatingLabelText="製法"
            fullWidth={true}
            value={this.state.process}
            onChange={ (event, index, value) => this.setState( { process: value } ) } >
            <MenuItem value="速醸酛"  primaryText="速醸酛" />
            <MenuItem value="山廃酛" primaryText="山廃酛" />
            <MenuItem value="生酛" primaryText="生酛" />
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
            dataSource={this.props.breweries}
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
            dataSource={this.props.rices}
            fullWidth={true}
          />
          <AutoComplete
            id="riceOfKake"
            floatingLabelFixed={true}
            floatingLabelText="掛米"
            dataSource={this.props.rices}
            fullWidth={true}
          />
          <AutoComplete
            id="koubo"
            floatingLabelFixed={true}
            floatingLabelText="酵母"
            dataSource={this.props.koubos}
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
          <TextField
            id="description"
            floatingLabelFixed={true}
            floatingLabelText="説明"
            fullWidth={true}
          />
        <Camera />

          <RaisedButton label="登録" primary={true} style={styles.button} onClick={this.send.bind(this)} />
          <div id="error" className="error"></div>
      </div>
    )
  }
}

NewSake.propTypes = {
  breweries: PropTypes.array.isRequired,
  brands: PropTypes.array.isRequired,
  dispatch: PropTypes.func.isRequired,
  koubos: PropTypes.array.isRequired,
  list: PropTypes.array.isRequired,
  rices: PropTypes.array.isRequired,
}

export default NewSake
