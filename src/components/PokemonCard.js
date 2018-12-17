import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {

  flipCard = (e) => {
  
    if(e.target.src === this.props.pokemon.sprites.front) {
      e.target.src = this.props.pokemon.sprites.back
    } else {
      e.target.src = this.props.pokemon.sprites.front
    }
  }
  
  render() {
    let hpStat = this.props.pokemon.stats.find(stat => {
      return stat.name === 'hp'
    })
 
    return (
      <Card onClick={this.flipCard}>
        <div>
          <div className="image">
            <img alt="oh no!" src={this.props.pokemon.sprites.front}/>
          </div>
          <div className="content">
            <div className="header">{this.props.pokemon.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {`${hpStat.name} ${hpStat.value}`}
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
