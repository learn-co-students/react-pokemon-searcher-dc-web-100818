import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {
  state = {
    image: this.props.pokemon.sprites.front
  }

  handleClick = () => {
    let front = this.props.pokemon.sprites.front
    let back = this.props.pokemon.sprites.back

    if (this.state.image === front) {
      this.setState({image: back})
    } else if (this.state.image === back) {
      this.setState({image: front})
    }
  }

  render() {
    let hpStat = this.props.pokemon.stats.filter(stat => stat.name === "hp")
    return (
      <Card>
        <div>
          <div className="image" onClick={this.handleClick}>
            <img alt="oh no!" src={this.state.image}/>
          </div>
          <div className="content">
            <div className="header">{this.props.pokemon.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {hpStat[0].value}
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
