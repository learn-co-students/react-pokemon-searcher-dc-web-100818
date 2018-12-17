import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {
  constructor(){
    super()
    this.state = {
      frontShown: true
    }
  }

  flipImage = () =>{
    this.setState({
      frontShown: !this.state.frontShown
    })
    this.findHP()
  }

  findHP = () =>{
    let stats = this.props.pokemon.stats;
    return stats.find(function(element) {
      return element.name === "hp"})
  }

  render() {
    return (
      <Card>
        <div>
          <div className="image" onClick={this.flipImage}>
            {this.state.frontShown ? <img alt={this.props.pokemon.name} src={this.props.pokemon.sprites.front} /> : <img alt={this.props.pokemon.name} src={this.props.pokemon.sprites.back} />
            }
          </div>
          <div className="content">
            <div className="header">{this.props.pokemon.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {this.findHP().value} hp
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
