import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import RaisedButton from 'material-ui/RaisedButton'
import NewBasicData from '../components/NewBasicData'
import NewUserData from '../components/NewUserData'
import appStyles from '../../public/stylesheets/scss/app.scss'
import axios from 'axios'

class New extends React.Component {

  componentDidMount(){
    document.getElementById('sendBtn').addEventListener('click', this.send)
  }

  send(){
    axios.post( '/api' , {
      brand: document.getElementById('brand').value,
      category: document.getElementById('category').value,
      process: document.getElementById('process').value,
      subname: document.getElementById('subname').value,
      url: document.getElementById('url').value,
      brewery: document.getElementById('brewery').value,
      prefecture: document.getElementById('prefecture').value,
      riceOfKouji: document.getElementById('riceOfKouji').value,
      riceOfKake: document.getElementById('riceOfKake').value,
      koubo: document.getElementById('koubo').value,
      polishRate: document.getElementById('polishRate').value,
      alcoholRate: document.getElementById('alcoholRate').value,
      sakeRate: document.getElementById('sakeRate').value,
      acidRate: document.getElementById('acidRate').value,
      aminoRate: document.getElementById('aminoRate').value,
      picture: document.getElementById('picture').value,
      comment: document.getElementById('comment').value,
      flavor: document.getElementById('flavor').value,
      taste: document.getElementById('taste').value,
      maturation: document.getElementById('maturation').value,
      lowerTemperature: document.getElementById('lowerTemperature').value,
      upperTemperature: document.getElementById('upperTemperature').value,
      matched: document.getElementById('matched').value,
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
          <div className={appStyles.header}>基本データ</div>
          <NewBasicData />

          <div className={appStyles.header}>ユーザーデータ</div>
          <NewUserData />

          <RaisedButton id="sendBtn" label="登録" primary="true" style={styles.button} />
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
