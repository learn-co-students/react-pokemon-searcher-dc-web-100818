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
      currentTerm: ""
    }
  }

  componentDidMount() {
    fetch(`http://localhost:3000/pokemon`)
      .then(res => res.json())
      .then(data => {
        this.setState({
          pokemons: data
        })
      })
  }

  searchPokemon = (e, { value }) => {
    this.setState({
      currentTerm: value
    })
  }

  filterPokemons = () => {
    if (this.state.currentTerm) {
     return this.state.pokemons.filter(pokemon => {
       if (pokemon.name.includes(this.state.currentTerm)) {
         return pokemon
       }
     })
   } else {
     return this.state.pokemons
   }

  }

  postPokemon = (data) => {
    this.setState({
      pokemons: [...this.state.pokemons, data]
    })
  }

  render() {
    return (  
      <div>
        <h1>Pokemon Searcher</h1>
        <br />
        <Search onSearchChange={_.debounce(this.searchPokemon, 500 )} showNoResults={false} />
        <br />
        <PokemonCollection allPokemons={this.filterPokemons()} />
        <br />
        <PokemonForm postPokemon={this.postPokemon} />
      </div>
    )
  }
}

export default PokemonPage
