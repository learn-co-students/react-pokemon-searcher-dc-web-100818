import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

class PokemonCollection extends React.Component {
  render() {
    return (

      <Card.Group itemsPerRow={6}>
      {this.props.allPokemon.map(obj => {
        return <PokemonCard key={obj.id} pokemon={obj}/>
      })}
      </Card.Group>
    )
  }
}

export default PokemonCollection
