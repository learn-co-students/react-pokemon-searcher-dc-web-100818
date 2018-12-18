import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {

  state = {
    pokeImg: this.props.pokemonObj.sprites.front
  }


  toggleImg = () => {

    let frontSrc = this.props.pokemonObj.sprites.front
    let backSrc = this.props.pokemonObj.sprites.back
    if(this.state.pokeImg === frontSrc){
      this.setState({
        pokeImg: backSrc
      })
    } else {
      this.setState({
        pokeImg: frontSrc
      })
    }
  }
  render() {
    return (
      <Card>
        <div onClick={this.toggleImg}>
          <div className="image">
            <img alt={this.props.pokemonObj.name} src={this.state.pokeImg}/>
          </div>
          <div className="content">
            <div className="header">{this.props.pokemonObj.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {this.props.pokemonObj.stats.find((el)=> el.name === "hp").value}
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
