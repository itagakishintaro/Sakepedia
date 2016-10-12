import React, { PropTypes } from 'react'
// css
import classes from '../../public/stylesheets/scss/detailInfo.scss'

class DetailInfo extends React.Component{
  constructor(props) {
    super(props)
  }
  render(){
    const items = {
      brand: '銘柄',
      subname: '副名',
      type: '分類',
      prefecture: '都道府県',
      brewery: '蔵元',
      url: 'URL',
      description: '説明',
      starterCulture: '酒母',
      sakeYeast: '酵母',
      sakeRiceExceptForKojiMaking: '掛米',
      riceForMakingKoji: '麹米',
      ricePolishingRate: '精米歩合',
      alcoholContent: 'アルコール度数',
      sakeMeterValue: '日本酒度',
      acidity: '酸度',
      aminoAcidContent: 'アミノ酸度',
    }
    let setAnchor = ( input ) => {
      if( /http/.test( input ) ){
        return <a href={input} target="_blank">{input}</a>
      }
      return input
    }
    return(
    <table className={classes.table}>
          { Object.keys( items ).map( key => {
            return(
              <tr className={classes.tr}>
                <th className={classes.th} width="25%">{ items[key] }</th>
                <td className={classes.td}>
                    { setAnchor( this.props.sake[key] ) }
                </td>
              </tr>
            )
          } ) }
    </table>
    )
  }
}

DetailInfo.propTypes = {
  sake: PropTypes.object.isRequired,
}

export default DetailInfo
