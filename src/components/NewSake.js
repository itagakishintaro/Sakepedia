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
import Prefectures from './Prefectures'
// validation
import validate from './NewSakeValidation'
// util
import smoothScroll from '../util/smoothScroll'

class NewSake extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      type: this.props.sake.type,
      error: false,
      errorText: {},
      prefecture: this.props.sake.prefecture,
      starterCulture: this.props.sake.starterCulture,
      snackbarOpen: false,
    }
    this.btnLabel = '登録'
    if( this.props.sake._id ){
      this.btnLabel = '更新'
    }
  }

  componentDidMount(){
    if( this.props.sake.brand ){
      document.getElementById('brand').value = this.props.sake.brand
    }
    if( this.props.sake.subname ){
      document.getElementById('subname').value = this.props.sake.subname
    }
    if( this.props.sake.brewery ){
      document.getElementById('brewery').value = this.props.sake.brewery
    }
    if( this.props.sake.url ){
      document.getElementById('url').value = this.props.sake.url
    }
    if( this.props.sake.description ){
      document.getElementById('description').value = this.props.sake.description
    }
    if( this.props.sake.sakeYeast ){
      document.getElementById('sakeYeast').value = this.props.sake.sakeYeast
    }
    if( this.props.sake.sakeRiceExceptForKojiMaking ){
      document.getElementById('sakeRiceExceptForKojiMaking').value = this.props.sake.sakeRiceExceptForKojiMaking
    }
    if( this.props.sake.riceForMakingKoji ){
      document.getElementById('riceForMakingKoji').value = this.props.sake.riceForMakingKoji
    }
    if( this.props.sake.ricePolishingRate ){
      document.getElementById('ricePolishingRate').value = this.props.sake.ricePolishingRate
    }
    if( this.props.sake.alcoholContent ){
      document.getElementById('alcoholContent').value = this.props.sake.alcoholContent
    }
    if( this.props.sake.sakeMeterValue ){
      document.getElementById('sakeMeterValue').value = this.props.sake.sakeMeterValue
    }
    if( this.props.sake.acidity ){
      document.getElementById('acidity').value = this.props.sake.acidity
    }
    if( this.props.sake.aminoAcidContent ){
      document.getElementById('aminoAcidContent').value = this.props.sake.aminoAcidContent
    }
    if( this.props.sake.imageUrl ){
      document.getElementById('imageUrl').value = this.props.sake.imageUrl
    }
  }

  send(){
    let validation = validate( this.state )
    this.setState( { errorText: validation.errorText } )
    if ( validation.error ) {
      smoothScroll( document.getElementById('newSake'), 1000 )
      return
    }
    let data = {
      brand : document.getElementById('brand').value,
      subname: document.getElementById('subname').value,
      type: this.state.type,
      prefecture: this.state.prefecture,
      brewery: document.getElementById('brewery').value,
      url: document.getElementById('url').value,
      description: document.getElementById('description').value,
      starterCulture: this.state.starterCulture,
      sakeYeast: document.getElementById('sakeYeast').value,
      sakeRiceExceptForKojiMaking: document.getElementById('sakeRiceExceptForKojiMaking').value,
      riceForMakingKoji: document.getElementById('riceForMakingKoji').value,
      ricePolishingRate: document.getElementById('ricePolishingRate').value,
      alcoholContent: document.getElementById('alcoholContent').value,
      sakeMeterValue: document.getElementById('sakeMeterValue').value,
      acidity: document.getElementById('acidity').value,
      aminoAcidContent: document.getElementById('aminoAcidContent').value,
      imageUrl: document.getElementById('imageUrl').value,
      date: new Date(),
      userid: window.localStorage.getItem( 'userid' ),
      username: window.localStorage.getItem( 'username' ),
    }
    if( this.props.sake._id ){ // update
      axios.put( '/api/sakes/' + this.props.sake._id , data)
      .then( () => {
        window.location.href ='/'
      })
      .catch( error => {
        document.getElementById('error').textContent = JSON.stringify(error)
        smoothScroll( document.getElementById('error'), 100)
      })
    } else { // insert
      axios.post( '/api/sakes' , data)
      .then( () => {
        window.location.href ='/'
      })
      .catch( error => {
        document.getElementById('error').textContent = JSON.stringify(error)
        smoothScroll( document.getElementById('error'), 100)
      })
    }
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
      imageHint: {
        color: 'gray',
        fontSize: '0.8em',
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
          <TextField
            id="subname"
            floatingLabelFixed={true}
            floatingLabelText="副名"
            fullWidth={true}
          />
          <SelectField
            id="type"
            errorText={this.state.errorText.type}
            floatingLabelFixed={true}
            floatingLabelText="分類*"
            fullWidth={true}
            value={this.state.type}
            onChange={ (event, index, value) => this.setState( { type: value } ) } >
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
          <Prefectures
            errorText={this.state.errorText.prefecture}
            label="都道府県*"
            setPrefecture={this.setPrefecture.bind(this)}
            value={this.props.sake.prefecture}
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
          <TextField
            id="url"
            errorText={this.state.errorText.url}
            floatingLabelFixed={true}
            floatingLabelText="URL"
            fullWidth={true}
            hintText="商品のホームページなど"
            type="url"
          />
          <TextField
            id="description"
            floatingLabelFixed={true}
            floatingLabelText="説明"
            fullWidth={true}
            hintText="ラベルの説明、ホームページの解説など"
            multiLine={true}
            rows={3}
          />
          <SelectField
            id="starterCulture"
            errorText={this.state.errorText.starterCulture}
            floatingLabelFixed={true}
            floatingLabelText="酒母"
            fullWidth={true}
            value={this.state.starterCulture}
            onChange={ (event, index, value) => this.setState( { starterCulture: value } ) } >
            <MenuItem value="速醸酛"  primaryText="速醸酛" />
            <MenuItem value="山廃酛" primaryText="山廃酛" />
            <MenuItem value="生酛" primaryText="生酛" />
          </SelectField>
          <AutoComplete
            id="sakeYeast"
            floatingLabelFixed={true}
            floatingLabelText="酵母"
            dataSource={this.props.sakeYeasts}
            fullWidth={true}
          />
          <AutoComplete
            id="sakeRiceExceptForKojiMaking"
            floatingLabelFixed={true}
            floatingLabelText="掛米"
            dataSource={this.props.rices}
            fullWidth={true}
          />
          <AutoComplete
            id="riceForMakingKoji"
            floatingLabelFixed={true}
            floatingLabelText="麹米"
            dataSource={this.props.rices}
            fullWidth={true}
          />
          <TextField
            id="ricePolishingRate"
            errorText={this.state.errorText.ricePolishingRate}
            floatingLabelFixed={true}
            floatingLabelText="精米歩合(%)"
            fullWidth={true}
            step="0.1"
            type="number"
          />
          <TextField
            id="alcoholContent"
            errorText={this.state.errorText.alcoholContent}
            floatingLabelFixed={true}
            floatingLabelText="アルコール度数(%)"
            fullWidth={true}
            step="0.1"
            type="number"
          />
          <TextField
            id="sakeMeterValue"
            errorText={this.state.errorText.sakeMeterValue}
            floatingLabelFixed={true}
            floatingLabelText="日本酒度"
            fullWidth={true}
            step="0.1"
            type="number"
          />
          <TextField
            id="acidity"
            errorText={this.state.errorText.acidity}
            floatingLabelFixed={true}
            floatingLabelText="酸度"
            fullWidth={true}
            step="0.1"
            type="number"
          />
          <TextField
            id="aminoAcidContent"
            errorText={this.state.errorText.aminoAcidContent}
            floatingLabelFixed={true}
            floatingLabelText="アミノ酸度"
            fullWidth={true}
            step="0.1"
            type="number"
          />
          <TextField
            id="imageUrl"
            floatingLabelFixed={true}
            floatingLabelText="画像URL"
            fullWidth={true}
            hintText="Instagramや蔵元ホームページなどから"
          />
        <p style={styles.imageHint}>※Instagramの場合、URL末尾の「/?XXXXXX」部分を「/media/?size=t」に変えてください。</p>
          <RaisedButton label={this.btnLabel} primary={true} style={styles.button} onClick={this.send.bind(this)} />
          <div id="error" className="error"></div>
      </div>
    )
  }
}

NewSake.propTypes = {
  breweries: PropTypes.array.isRequired,
  brands: PropTypes.array.isRequired,
  dispatch: PropTypes.func.isRequired,
  sake: PropTypes.Object,
  sakeYeasts: PropTypes.array.isRequired,
  list: PropTypes.array.isRequired,
  rices: PropTypes.array.isRequired,
}

export default NewSake
