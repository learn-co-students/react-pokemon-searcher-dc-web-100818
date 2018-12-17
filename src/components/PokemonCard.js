import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      image: this.props.pokemon.sprites.front
    }
  }

  handleToggle = () => {
    if (this.state.image === this.props.pokemon.sprites.front){
      this.setState ({
        image: this.props.pokemon.sprites.back
      })
    } else {
      this.setState ({
        image: this.props.pokemon.sprites.front
      })
    }
  }

  render() {
    return (
      <Card>
        <div onClick={this.handleToggle}>
          <div className="image">
            <img alt="oh no!" src={this.state.image} />
          </div>
          <div className="content">
            <div className="header">{this.props.pokemon.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {this.props.pokemon.stats[5].value}
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
