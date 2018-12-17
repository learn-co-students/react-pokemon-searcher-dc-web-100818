import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

class PokemonCollection extends React.Component {
  render(props) {
    return (
      <Card.Group itemsPerRow={6}>
        { this.props.filteredPokemon.length === 0 ? this.props.allPokemon.map(pokemon => <PokemonCard key={pokemon.id} pokemon={pokemon} />) :
        this.props.filteredPokemon.map(pokemon => <PokemonCard key={pokemon.id} pokemon={pokemon} />)
        }
      </Card.Group>
    )
  }
}

export default PokemonCollection
