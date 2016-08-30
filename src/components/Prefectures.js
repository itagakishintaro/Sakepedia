import React, { PropTypes } from 'react'
// material-ui
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'

class Prefectures extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      prefecture: '',
    }
  }

  handleChange( event, index, value ) {
    this.setState( { prefecture: value } )
    this.props.setPrefecture( value )
  }

  render()  {
    return(
    <div>
    <SelectField
      id="prefecture"
      errorText={this.props.errorText}
      floatingLabelFixed={true}
      floatingLabelText={ this.props.label }
      fullWidth={true}
      value={this.state.prefecture}
      onChange={ this.handleChange.bind(this) }
    >
      <MenuItem value="北海道" primaryText="北海道" />
      <MenuItem value="青森県" primaryText="青森県" />
      <MenuItem value="岩手県" primaryText="岩手県" />
      <MenuItem value="宮城県" primaryText="宮城県" />
      <MenuItem value="秋田県" primaryText="秋田県" />
      <MenuItem value="山形県" primaryText="山形県" />
      <MenuItem value="福島県" primaryText="福島県" />
      <MenuItem value="茨城県" primaryText="茨城県" />
      <MenuItem value="栃木県" primaryText="栃木県" />
      <MenuItem value="群馬県" primaryText="群馬県" />
      <MenuItem value="埼玉県" primaryText="埼玉県" />
      <MenuItem value="千葉県" primaryText="千葉県" />
      <MenuItem value="東京都" primaryText="東京都" />
      <MenuItem value="神奈川県" primaryText="神奈川県" />
      <MenuItem value="新潟県" primaryText="新潟県" />
      <MenuItem value="富山県" primaryText="富山県" />
      <MenuItem value="石川県" primaryText="石川県" />
      <MenuItem value="福井県" primaryText="福井県" />
      <MenuItem value="山梨県" primaryText="山梨県" />
      <MenuItem value="長野県" primaryText="長野県" />
      <MenuItem value="岐阜県" primaryText="岐阜県" />
      <MenuItem value="静岡県" primaryText="静岡県" />
      <MenuItem value="愛知県" primaryText="愛知県" />
      <MenuItem value="三重県" primaryText="三重県" />
      <MenuItem value="滋賀県" primaryText="滋賀県" />
      <MenuItem value="京都府" primaryText="京都府" />
      <MenuItem value="大阪府" primaryText="大阪府" />
      <MenuItem value="兵庫県" primaryText="兵庫県" />
      <MenuItem value="奈良県" primaryText="奈良県" />
      <MenuItem value="和歌山県" primaryText="和歌山県" />
      <MenuItem value="鳥取県" primaryText="鳥取県" />
      <MenuItem value="島根県" primaryText="島根県" />
      <MenuItem value="岡山県" primaryText="岡山県" />
      <MenuItem value="広島県" primaryText="広島県" />
      <MenuItem value="山口県" primaryText="山口県" />
      <MenuItem value="徳島県" primaryText="徳島県" />
      <MenuItem value="香川県" primaryText="香川県" />
      <MenuItem value="愛媛県" primaryText="愛媛県" />
      <MenuItem value="高知県" primaryText="高知県" />
      <MenuItem value="福岡県" primaryText="福岡県" />
      <MenuItem value="佐賀県" primaryText="佐賀県" />
      <MenuItem value="長崎県" primaryText="長崎県" />
      <MenuItem value="熊本県" primaryText="熊本県" />
      <MenuItem value="大分県" primaryText="大分県" />
      <MenuItem value="宮崎県" primaryText="宮崎県" />
      <MenuItem value="鹿児島県" primaryText="鹿児島県" />
      <MenuItem value="沖縄県" primaryText="沖縄県" />
    </SelectField>
    </div>
    )
  }
}

Prefectures.propTypes = {
  errorText: PropTypes.string,
  setPrefecture: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
}

export default Prefectures
