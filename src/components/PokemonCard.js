import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {

  state = {
    imgClick: false
  }

  handleClick = () => {
    console.log("i was clicked")
    this.setState({
      imgClick: !this.state.imgClick
    })
  }

  render() {
    const poke = this.props.pokemon;
    let pokeStat = this.props.pokemon.stats.filter(stat => stat.name === "hp")

    return (
      <Card>
        <div onClick={this.handleClick}>
          <div className="image">
            { this.state.imgClick === false ? <img src={poke.sprites.front} alt="oh no!" />
          : <img src={poke.sprites.back} alt="oh no!" /> }
          </div>
          <div className="content">
            <div className="header">{poke.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
               {`${pokeStat[0]["value"]} hp`}
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
