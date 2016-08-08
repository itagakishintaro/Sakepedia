import React, { PropTypes } from 'react'
import {Card, CardHeader, CardText} from 'material-ui/Card'
import FlatButton from 'material-ui/FlatButton'
import Details from '../components/Details'
import NewReview from './NewReview'

const styles = {
  card: {
    'marginTop': '1em',
  },
  img: {
    'height': '100px',
    'marginLeft': '1em',
  },
}

class SakeCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showNewReview: false,
    }
  }

  toggleNewReview() {
    this.setState({ showNewReview: !this.state.showNewReview })
  }

  render() {
    return (
      <Card style={ styles.card }>
        <CardHeader
          title={ `${this.props.sake.名前} ( ${this.props.sake.種類} )` }
          subtitle={ `${this.props.sake.蔵元} ( ${this.props.sake.都道府県} ) ` }
          actAsExpander={true}
          showExpandableButton={true}
        />
        <div>
          <img src={ this.props.sake.画像URL } style={ styles.img } />
        </div>
        <CardText>{ this.props.sake.香味 }</CardText>
        <CardText expandable={true}>
          <Details sake={this.props.sake} />
          <FlatButton label="レビューする" primary={true} onClick={this.toggleNewReview.bind(this)} />
          { this.state.showNewReview ? <NewReview sakeId={this.props.sake._id} /> : null }
        </CardText>
      </Card>
    )
  }
}

SakeCard.propTypes = {
  sake: PropTypes.object.isRequired,
}

export default SakeCard
