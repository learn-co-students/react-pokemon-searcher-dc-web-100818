import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {
  state = {
    url: this.props.poke.sprites.front
  }

  getSprite = (event) => {
    this.state.url === this.props.poke.sprites.back ? this.setState({url: this.props.poke.sprites.front}) : this.setState({url: this.props.poke.sprites.back})
  }

  render() {
    return (
      <Card onClick={this.getSprite}>
        <div>
          <div className="image">
            <img src={this.state.url} alt="oh no!" />
          </div>
          <div className="content">
            <div className="header">{this.props.poke.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {this.props.poke.stats.find(stat => stat.name === 'hp').value}
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
