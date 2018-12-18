import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

class PokemonCollection extends React.Component {
  render() {
    let searchTerm = this.props.userInput
    let filtered = this.props.pokemons.filter(searchedPokemon => searchedPokemon.name.includes(searchTerm))

    return (
      <Card.Group itemsPerRow={6}>


      {filtered.map(pokemon => <PokemonCard key={pokemon.id} pokemonObj={pokemon}/>)}


      </Card.Group>

    )
  }
}

export default PokemonCollection
  // {this.props.pokemons.map(pokemon => <PokemonCard key={pokemon.id} pokemonObj={pokemon}/>)}
