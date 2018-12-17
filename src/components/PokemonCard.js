import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {

  spriteFlipper = (pokemon, event) => {
    if (event.target.src === pokemon.sprites.front) {
      event.target.src = pokemon.sprites.back
    } else {
      event.target.src = pokemon.sprites.front
    }
  }
  
  render() {
    return (
      <Card>
        <div>
          <div className="image" onClick={(event) => this.spriteFlipper(this.props.pokemon, event)}>
            <img src={this.props.pokemon.sprites.front} alt="oh no!" />
          </div>
          <div className="content">
            <div className="header">{this.props.pokemon.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {this.props.pokemon.stats.find(stat => stat.name === 'hp').value}
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
