import React, { PropTypes } from 'react'
// material-ui
import Checkbox from 'material-ui/Checkbox'
import MenuItem from 'material-ui/MenuItem'
import SelectField from 'material-ui/SelectField'
import Snackbar from 'material-ui/Snackbar'
import { grey400 } from 'material-ui/styles/colors'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
// lib
import axios from 'axios'
// validation
import validate from './NewReviewValidation'
// util
import smoothScroll from '../util/smoothScroll'

class NewReview extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      errorText: {},
      evaluation: '',
      flavor: '',
      maturation: '',
      sakeRate: '',
      taste: '',
      snackbarOpen: false,
    }
  }

  send(){
    let validation = validate( this.state )
    this.setState( { errorText: validation.errorText } )
    if ( validation.error ) {
      smoothScroll( document.getElementById('newReview'), 1000 )
      return
    }
    axios.put( `/api/sakes/${ this.props.sake._id }/add/review`, {
      date: new Date(),
      review: this.state.evaluation,
      comment: document.getElementById('comment').value,
      flavor: this.state.flavor,
      taste: this.state.taste,
      maturation: this.state.maturation,
      temperature: {
        temp5: document.getElementById('temp5').checked,
        temp10: document.getElementById('temp10').checked,
        temp15: document.getElementById('temp15').checked,
        temp40: document.getElementById('temp40').checked,
        temp50: document.getElementById('temp50').checked,
      },
      mariage: document.getElementById('mariage').value,
      userId: window.localStorage.getItem( 'userid' ),
      userName: window.localStorage.getItem( 'username' ),
    })
    .then( () => {
      this.props.update()
      this.props.changeTab('reviews')
    })
    .catch( error => {
      document.getElementById('error').textContent = JSON.stringify(error)
      smoothScroll( document.getElementById('error'), 100)
    })
    this.openSnackbar()
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
      label: {
        color:  grey400,
        fontSize: '0.8em',
      },
      visible: {
        display: 'none',
      },
    }
    if( this.props.isLogin ) {
      styles.visible.display = 'block'
    }
    return (
      <div id="newReview" style={styles.visible}>
        <Snackbar
          open={this.state.snackbarOpen}
          message="送信しました"
          autoHideDuration={1000}
          onRequestClose={this.closeSnackbar.bind(this)}
        />
          <SelectField
            id="evaluation"
            errorText={this.state.errorText.evaluation}
            floatingLabelFixed={true}
            floatingLabelText="評価*"
            fullWidth={true}
            value={this.state.evaluation}
            onChange={ (event, index, value) => this.setState( { evaluation: value } ) } >
            <MenuItem value={1} primaryText="もう飲まない" />
            <MenuItem value={2} primaryText="好んでは飲まない" />
            <MenuItem value={3} primaryText="また飲んでもいい" />
            <MenuItem value={4} primaryText="また飲みたい" />
            <MenuItem value={5} primaryText="定番にしたい" />
          </SelectField>

          <TextField
            id="comment"
            errorText={this.state.errorText.comment}
            floatingLabelFixed={true}
            floatingLabelText="香味*"
            fullWidth={true}
            multiLine={true}
            required={true}
            rows="3"
          />

          <SelectField
            id="flavor"
            errorText={this.state.errorText.flavor}
            floatingLabelFixed={true}
            floatingLabelText="香り*"
            fullWidth={true}
            value={this.state.flavor}
            onChange={ (event, index, value) => this.setState( { flavor: value } ) } >
            <MenuItem value={1} primaryText="低い" />
            <MenuItem value={2} primaryText="やや低い" />
            <MenuItem value={3} primaryText="やや高い" />
            <MenuItem value={4} primaryText="高い" />
          </SelectField>
          <SelectField
            id="taste"
            errorText={this.state.errorText.taste}
            floatingLabelFixed={true}
            floatingLabelText="味*"
            fullWidth={true}
            value={this.state.taste}
            onChange={ (event, index, value) => this.setState( { taste: value } ) } >
            <MenuItem value={1} primaryText="淡い" />
            <MenuItem value={2} primaryText="やや淡い" />
            <MenuItem value={3} primaryText="やや濃い" />
            <MenuItem value={4} primaryText="濃い" />
          </SelectField>
          <SelectField
            id="maturation"
            errorText={this.state.errorText.maturation}
            floatingLabelFixed={true}
            floatingLabelText="熟成*"
            fullWidth={true}
            value={this.state.maturation}
            onChange={ (event, index, value) => this.setState( { maturation: value } ) } >
            <MenuItem value={1} primaryText="フレッシュ" />
            <MenuItem value={2} primaryText="ややフレッシュ" />
            <MenuItem value={3} primaryText="やや熟成" />
            <MenuItem value={4} primaryText="熟成" />
          </SelectField>

          <label style={styles.label}>適した温度</label>
          <Checkbox
            id="temp5"
            label="一番冷たい(5度位)"
          />
          <Checkbox
            id="temp10"
            label="やや冷たい(10度位)"
          />
          <Checkbox
            id="temp15"
            label="常温(15度位)"
          />
          <Checkbox
            id="temp40"
            label="ぬる燗(40度位)"
          />
          <Checkbox
            id="temp50"
            label="熱燗(50度位)"
          />

          <TextField
            id="mariage"
            floatingLabelFixed={true}
            floatingLabelText="マリアージュ"
            fullWidth={true}
          />

          <RaisedButton label="登録" primary={true} style={styles.button} onClick={ this.send.bind(this) } />
          <div id="error" className="error"></div>
      </div>
    )
  }
}

NewReview.propTypes = {
  changeTab: PropTypes.func.isRequired,
  dispatch: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
  isLogin: PropTypes.bool.isRequired,
  list: PropTypes.array.isRequired,
  sake: PropTypes.object.isRequired,
  update: PropTypes.func.isRequired,
}

export default NewReview
