import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import { Search } from 'semantic-ui-react'
import _ from 'lodash'

class PokemonPage extends React.Component {

  constructor() {
    super()
    this.state = {
      pokemons: [],
      searchText: "",
    }
  }


  componentDidMount() {
    fetch('http://localhost:3000/pokemon')
    .then(res => res.json())
    .then(data => this.setState({ pokemons: data }))
  }

  onSearch = (event) => {
    this.setState({
      searchText: event.currentTarget.value
    })
  }

  filterPokemon = () => {
    return this.state.pokemons.filter(pokemon =>
      pokemon.name.includes(this.state.searchText))
  }

  addPokemon = (pokemon) => {
    this.setState({
      pokemons: [pokemon, ...this.state.pokemons]
    })
  }

  render() {
    return (
      <div>
        <h1>Pokemon Searcher</h1>
        <br />
        <Search onSearchChange={this.onSearch} showNoResults={false}/>
        <br />
        <PokemonCollection pokemons={this.filterPokemon()}/>
        <br />
        <PokemonForm addPokemon={this.addPokemon}/>
      </div>
    )
  }
}

export default PokemonPage
