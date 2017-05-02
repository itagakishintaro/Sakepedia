import React, { PropTypes } from 'react'
// material-ui
import AutoComplete from 'material-ui/AutoComplete'
import { grey400 } from 'material-ui/styles/colors'
import FontIcon from 'material-ui/FontIcon'
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
import handleImage from '../util/ImageHandler'

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
    if( this.props.sake.subname ){
      document.getElementById('subname').value = this.props.sake.subname
    }
    if( this.props.sake.url ){
      document.getElementById('url').value = this.props.sake.url
    }
    if( this.props.sake.description ){
      document.getElementById('description').value = this.props.sake.description
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
    if( this.props.sake.image ){
      document.getElementById('image').value = this.props.sake.image
      document.getElementById( 'thumbnail' ).src = this.props.sake.image
    }
  }

  send(){
    let validation = validate( this.state )
    this.setState( { errorText: validation.errorText } )
    if ( validation.error ) {
      smoothScroll( document.getElementById('newSake'), 1000 )
      return
    }
    let data = {}
    data.reviews = this.props.sake.reviews
    data.brand = document.getElementById('brand').value
    data.subname = document.getElementById('subname').value
    data.type = this.state.type
    data.prefecture = this.state.prefecture
    data.brewery = document.getElementById('brewery').value
    data.url = document.getElementById('url').value
    data.description = document.getElementById('description').value
    data.starterCulture = this.state.starterCulture
    data.sakeYeast = document.getElementById('sakeYeast').value
    data.sakeRiceExceptForKojiMaking = document.getElementById('sakeRiceExceptForKojiMaking').value
    data.riceForMakingKoji = document.getElementById('riceForMakingKoji').value
    data.ricePolishingRate = document.getElementById('ricePolishingRate').value
    data.alcoholContent = document.getElementById('alcoholContent').value
    data.sakeMeterValue = document.getElementById('sakeMeterValue').value
    data.acidity = document.getElementById('acidity').value
    data.aminoAcidContent = document.getElementById('aminoAcidContent').value
    data.image = document.getElementById('image').value
    data.date = new Date()
    data.userid = window.localStorage.getItem( 'userid' )
    data.username = window.localStorage.getItem( 'username' )

    if( this.props.sake._id ){ // update
      axios.put( '/api/sakes/' + this.props.sake._id , data)
      .then( () => {
        window.location.href = '/#/sake/' + this.props.sake._id
      })
      .catch( error => {
        document.getElementById('error').textContent = JSON.stringify(error)
        smoothScroll( document.getElementById('error'), 100)
      })
    } else { // insert
      axios.post( '/api/sakes' , data)
      .then( r => {
        window.location.href = '/#/sake/' + r.data
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

  handleFile() {
    let file = document.getElementById('file').files[0]
    handleImage( file, 400, ( dataURL ) => {
      document.getElementById( 'image' ).value = dataURL
      document.getElementById( 'thumbnail' ).src = dataURL
    } )
  }

  handleOcr() {
    document.getElementById('loading').style.display='block';
    let file = document.getElementById('ocr').files[0]
    handleImage( file, 600, ( dataURL ) => {
      document.getElementById( 'thumbnail2' ).src = dataURL
      axios.post( '/api/ocr/', { content: dataURL.replace(/^data:image\/(png|jpeg);base64,/, '') } )
      .then( r => {
        document.getElementById('loading').style.display='none';
        let desc =  r.data.responses[0].textAnnotations[0].description
        if( document.getElementById('description').value ) {
          document.getElementById('description').value += '\n' + desc
        } else {
          document.getElementById('description').value = desc
        }
        let re
        re = new RegExp( '(酵母)(.*)(\s)' )
        if( !document.getElementById('sakeYeast').value && desc.match( re ) ){
          document.getElementById('sakeYeast').value = RegExp.$2
        }
        re = new RegExp( '(精米歩合)([^0-9]*)([0-9]{2})' )
        if( !document.getElementById('ricePolishingRate').value && desc.match( re ) ){
          document.getElementById('ricePolishingRate').value = RegExp.$3
        }
        re = new RegExp( '(アルコール)([^0-9]*)([0-9]{1,2}\.*[0-9])' )
        if( !document.getElementById('alcoholContent').value && desc.match( re ) ){
          document.getElementById('alcoholContent').value = RegExp.$3
        }
        re = new RegExp( '(日本酒度)([^0-9\+-]*)([\+-]*)([0-9]{1,2}\.*[0-9])' )
        if( !document.getElementById('sakeMeterValue').value && desc.match( re ) ){
          document.getElementById('sakeMeterValue').value = RegExp.$3 + RegExp.$4
        }
        re = new RegExp( '([^アミノ]酸度)([^0-9]*)([0-9]{1,2}\.*[0-9])' )
        if( !document.getElementById('acidity').value && desc.match( re ) ){
          document.getElementById('acidity').value = RegExp.$3
        }
        re = new RegExp( '(アミノ酸)([^0-9]*)([0-9]{1,2}\.*[0-9])' )
        if( !document.getElementById('aminoAcidContent').value && desc.match( re ) ){
          document.getElementById('aminoAcidContent').value = RegExp.$3
        }
      })
      .catch( error => {
        document.getElementById('loading').style.display='none';
        document.getElementById('error').textContent = JSON.stringify(error)
        smoothScroll( document.getElementById('error'), 100)
      })
    } )
  }
  setPrefAndBrewery( brand, index ){
    axios.get( '/api/sakes/brand/' + brand )
    .then( r => {
      this.setPrefecture( r.data.prefecture )
      document.getElementById('brewery').value = r.data.brewery
    })
  }

  render() {
    const styles = {
      button: {
        margin: '1em 0',
      },
      camera: {
        border: '10px',
        borderRadius: '2px',
        boxShadow: 'rgba(0, 0, 0, 0.117647) 0px 1px 6px, rgba(0, 0, 0, 0.117647) 0px 1px 4px',
        boxSizing: 'border-box',
        display: 'inline-block',
        float: 'right',
        height: '36px',
        lineHeight: '36px',
        margin: '.5em .5em 0 0',
        padding: '.5em 0',
        textAlign: 'center',
        width: '5em',
      },
      file: {
        display: 'none',
      },
      imageHint: {
        color: 'gray',
        fontSize: '0.8em',
      },
      label: {
        color:  grey400,
        fontSize: '0.8em',
      },
      thumbnail: {
        minHeight: '5em',
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
            onNewRequest={this.setPrefAndBrewery.bind(this)}
            required={true}
            searchText={this.props.sake.brand}
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
            value={this.state.prefecture}
          />
          <AutoComplete
            id="brewery"
            dataSource={ this.props.breweries.filter( b => this.state.prefecture? b[2] === this.state.prefecture: true ).map( array => array[0] ) }
            errorText={this.state.errorText.brewery}
            floatingLabelFixed={true}
            floatingLabelText="蔵元*"
            fullWidth={true}
            required={true}
            searchText={this.props.sake.brewery}
          />
          <div style={styles.label}>ラベル写真</div>
          <label htmlFor="file">
            <div style={styles.camera}>
              <FontIcon className="material-icons">photo_camera</FontIcon>
            </div>
            <input type="file" id="file" accept="image/*" capture="camera" style={styles.file} onChange={ this.handleFile }/>
          </label>

          <TextField
              id="image"
              floatingLabelFixed={true}
              fullWidth={true}
              hintText="画像のURLを入力してもOK"
              style={{display: 'none'}}
            />
          <img id="thumbnail" src="" width="25%" style={ styles.thumbnail }/>

          <div style={styles.label}>裏ラベル写真(文字を読み取る)</div>
          <label htmlFor="ocr">
            <div style={styles.camera}>
              <FontIcon className="material-icons">photo_camera</FontIcon>
            </div>
            <input type="file" id="ocr" accept="image/*" capture="camera" style={styles.file} onChange={ this.handleOcr }/>
          </label>
          <img id="thumbnail2" src="" width="25%" style={ styles.thumbnail }/>

          <TextField
            id="description"
            floatingLabelFixed={true}
            floatingLabelText="説明"
            fullWidth={true}
            hintText="裏ラベル、ホームページの説明など"
            multiLine={true}
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
            searchText={this.props.sake.sakeYeast}
          />
          <AutoComplete
            id="sakeRiceExceptForKojiMaking"
            floatingLabelFixed={true}
            floatingLabelText="掛米"
            dataSource={this.props.rices}
            fullWidth={true}
            searchText={this.props.sake.sakeRiceExceptForKojiMaking}
          />
          <AutoComplete
            id="riceForMakingKoji"
            floatingLabelFixed={true}
            floatingLabelText="麹米"
            dataSource={this.props.rices}
            fullWidth={true}
            searchText={this.props.sake.riceForMakingKoji}
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
            id="url"
            errorText={this.state.errorText.url}
            floatingLabelFixed={true}
            floatingLabelText="URL"
            fullWidth={true}
            hintText="商品のホームページなど"
            type="url"
          />

        <RaisedButton label={this.btnLabel} primary={true} style={styles.button} onTouchTap={this.send.bind(this)} />
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
