import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Sort from './Sort'
import { Search } from 'semantic-ui-react'
import _ from 'lodash'

class PokemonIndex extends React.Component {
  state = {
    pokemon: [],
    searchTerm: '',
    sortTerm: ''
  }
  
  sortByHandler = (event, data) => this.setState({sortTerm: data.value})

  componentDidMount() {
    this.fetchAllPokemon()
  }

  fetchAllPokemon = () => {
    fetch('http://localhost:3000/pokemon')
      .then(res => res.json())
      .then(data => this.setState({pokemon: data}))
  }

  searchHandler = (event, data) => {
    this.setState({searchTerm: data.value})
  }

  filterPokemon = () => {
    let filteredPokemon = this.state.pokemon.filter(pokemon => pokemon.name.includes(this.state.searchTerm))
    if (this.state.sortTerm === 'id') {
      return filteredPokemon.sort((a, b) => a.id - b.id)
    } else if (this.state.sortTerm === 'name') {
      return filteredPokemon.sort((a, b) => a.name > b.name)
    } else if (this.state.sortTerm === 'hp') {
      return filteredPokemon.sort((a, b) => (
      a.stats.find(stat => stat.name === 'hp').value - b.stats.find(stat => stat.name === 'hp').value
      ))
    }
    return filteredPokemon
  }

  addPokemon = (pokemon) => {
    let pokemonObj = {
      name: pokemon.name,
      stats: [
        {name: 'hp', value: pokemon.hp}
      ],
      sprites: {front: pokemon.frontUrl, back: pokemon.backUrl}
    }

    fetch('http://localhost:3000/pokemon', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(pokemonObj)
    })
      .then(() => this.fetchAllPokemon())
  }
  
  render() {
    return (
      <div>
        <h1>Pokemon Searcher</h1>
        <br />
        <Search onSearchChange={_.debounce(this.searchHandler, 500)} showNoResults={false} />
        <br />
        <Sort sortByHandler={this.sortByHandler}/>
        <br />
        <PokemonCollection pokemon={this.filterPokemon}/>
        <br />
        <PokemonForm addPokemon={this.addPokemon}/>
      </div>
    )
  }
}

export default PokemonIndex
