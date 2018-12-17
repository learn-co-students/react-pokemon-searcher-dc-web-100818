import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {
  constructor(){
    super()
    this.state = {
      sprite: 'front'
    }
  }

  togglePic = (event) => {
    if (this.state.sprite === 'front'){
      this.setState({ sprite: 'back' })
    } else {
      this.setState({ sprite: 'front'})
    }
  }

  render() {
    return (
      <Card>
        <div>
          <div className="image">
            <img alt={this.props.poke.name} src={this.props.poke.sprites[`${this.state.sprite}`]} onClick={this.togglePic}/>
          </div>
          <div className="content">
            <div className="header">{this.props.poke.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
               {this.props.poke.stats.find( stat => stat.name === 'hp').value} hp
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
