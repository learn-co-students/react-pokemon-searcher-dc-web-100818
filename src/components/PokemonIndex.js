import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import { Search } from 'semantic-ui-react'
import _ from 'lodash'

class PokemonPage extends React.Component {

  constructor() {
    super()
    this.state = {
      allPokemon: [],
      searchTerm: ''
    }
  }

  searchPokemon = (e, data) => {
    this.setState({searchTerm: data.value})
  }

  filterPokemon = () => {
    return this.state.allPokemon.filter(obj => obj.name.includes(this.state.searchTerm))
  }

  addPokemon = (pokemon) => {
    let newArr = [pokemon, ...this.state.allPokemon]
    this.setState({allPokemon: newArr})
  }

  render() {
    return (
      <div>
        <h1>Pokemon Searcher</h1>
        <br />
        <Search onSearchChange={ _.debounce(this.searchPokemon, 500)} showNoResults={false}/>
        <br />
        <PokemonCollection allPokemon={this.filterPokemon()}/>
        <br />
        <PokemonForm addPokemon={this.addPokemon}/>
      </div>
    )
  }

  componentDidMount() {
    fetch('http://localhost:3000/pokemon')
      .then(res => res.json())
      .then(data => this.setState({ allPokemon: data }))
  }
}

export default PokemonPage
