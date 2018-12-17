import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {

  constructor() {
    super()
    this.state = {
      front: true
    }
  } 

  changeImage = () => {
      this.setState({ front: !this.state.front })
  }

  render() {
    return (
      <Card>
        <div>
          <div className="image" >
            <img alt={this.props.pokemon.name} src={this.state.front ? this.props.pokemon.sprites.front : this.props.pokemon.sprites.back} onClick={this.changeImage} />
          </div>
          <div className="content">
            <div className="header">{this.props.pokemon.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              <p>HP: {this.props.pokemon.stats.find(stat => stat.name === 'hp').value}</p>
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
