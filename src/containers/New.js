import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import TextField from 'material-ui/TextField'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'
import AutoComplete from 'material-ui/AutoComplete'
import Slider from 'material-ui/Slider'
import RaisedButton from 'material-ui/RaisedButton'
import appStyles from '../../public/stylesheets/scss/app.scss'
import axios from 'axios'

class New extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      acidRate: 1.5,
      alcoholRate: 15,
      aminoRate: 1.5,
      brands: [],
      breweries: [],
      category: 0,
      flavor: 0,
      koubo: [],
      lowerTemperature: 0,
      maturation: 0,
      polishRate: 60,
      prefectures: [],
      process: 1,
      riceOfKake: [],
      riceOfKouji: [],
      sakeRate: 0,
      taste: 0,
      upperTemperature: 0,
    };
  }

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
    };
    return (
      <div>
        <form>
          <div className={appStyles.header}>基本データ</div>
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

          <div className={appStyles.header}>ユーザーデータ</div>
          <TextField
            id="comment"
            hintText="香味*"
            fullWidth="true"
            multiLine="true"
            rows="3"
          />

          <SelectField
            id="flavor"
            floatingLabelText="香り*"
            fullWidth="true"
            value={this.state.flavor}
            onChange={ (event, index, value) => this.setState( { flavor: value } ) } >
            <MenuItem value={1} primaryText="低い" />
            <MenuItem value={2} primaryText="やや低い" />
            <MenuItem value={3} primaryText="やや高い" />
            <MenuItem value={4} primaryText="高い" />
          </SelectField>
          <SelectField
            id="taste"
            floatingLabelText="味*"
            fullWidth="true"
            value={this.state.taste}
            onChange={ (event, index, value) => this.setState( { taste: value } ) } >
            <MenuItem value={1} primaryText="淡い" />
            <MenuItem value={2} primaryText="やや淡い" />
            <MenuItem value={3} primaryText="やや濃い" />
            <MenuItem value={4} primaryText="濃い" />
          </SelectField>
          <SelectField
            id="maturation"
            floatingLabelText="熟成*"
            fullWidth="true"
            value={this.state.maturation}
            onChange={ (event, index, value) => this.setState( { maturation: value } ) } >
            <MenuItem value={1} primaryText="フレッシュ" />
            <MenuItem value={2} primaryText="ややフレッシュ" />
            <MenuItem value={3} primaryText="やや熟成" />
            <MenuItem value={4} primaryText="熟成" />
          </SelectField>

          <SelectField
            id="lowerTemperature"
            floatingLabelText="温度（下限）"
            fullWidth="true"
            value={this.state.lowerTemperature}
            onChange={ (event, index, value) => this.setState( { lowerTemperature: value } ) } >
            <MenuItem value={1} primaryText="一番冷たい(5度位)" />
            <MenuItem value={2} primaryText="やや冷たい(10度位)" />
            <MenuItem value={3} primaryText="常温(15度位)" />
            <MenuItem value={4} primaryText="ぬる燗(40度位)" />
            <MenuItem value={5} primaryText="熱燗(50度位)" />
          </SelectField>
          <SelectField
            id="upperTemperature"
            floatingLabelText="温度（上限）"
            fullWidth="true"
            value={this.state.upperTemperature}
            onChange={ (event, index, value) => this.setState( { upperTemperature: value } ) } >
            <MenuItem value={1} primaryText="一番冷たい(5度位)" />
            <MenuItem value={2} primaryText="やや冷たい(10度位)" />
            <MenuItem value={3} primaryText="常温(15度位)" />
            <MenuItem value={4} primaryText="ぬる燗(40度位)" />
            <MenuItem value={5} primaryText="熱燗(50度位)" />
          </SelectField>

          <TextField
            id="matched"
            hintText="相性のよい料理"
            fullWidth="true"
          />
          <TextField
            id="matched"
            hintText="相性のよい料理"
            fullWidth="true"
          />
          <TextField
            id="matched"
            hintText="相性のよい料理"
            fullWidth="true"
          />

          <RaisedButton id="sendBtn" label="登録" primary="true" style={styles.button} />
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
