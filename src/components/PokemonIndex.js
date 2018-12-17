import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import { Search } from 'semantic-ui-react'
import _ from 'lodash'

class PokemonPage extends React.Component {
  constructor(){
    super()
    this.state = {
      allPokemon: [],
      filteredPokemon: []
    }
  }

  componentDidMount(){
    fetch('http://localhost:3000/pokemon')
      .then(response => response.json())
      .then(pokemonData => this.setState({
        allPokemon: pokemonData
      }))
  }

  onSearchChange = event =>{
    let searchText = document.querySelectorAll('input')[0].value
    let newFilteredPokemon = this.state.allPokemon.filter(pokemon => pokemon.name.includes(searchText))
    this.setState({
      filteredPokemon: newFilteredPokemon
    })
  }

  addNewPokemon = (newPokemon) =>{
    let allPokemon = [...this.state.allPokemon]
    this.setState({
      allPokemon: [...allPokemon, newPokemon]
    })
  }

  render() {
    return (
      <div>
        <h1>Pokemon Searcher</h1>
        <br />
        <Search onSearchChange={_.debounce((event) => {
            event.persist()
            this.onSearchChange(event)}, 500)} showNoResults={false} />
        <br />
        <PokemonCollection allPokemon={this.state.allPokemon} filteredPokemon={this.state.filteredPokemon}/>
        <br />
        <PokemonForm addNewPokemon={this.addNewPokemon}/>
      </div>
    )
  }
}

export default PokemonPage
