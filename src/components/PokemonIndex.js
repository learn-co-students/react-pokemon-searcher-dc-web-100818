import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import { Search } from 'semantic-ui-react'
import _ from 'lodash'

class PokemonPage extends React.Component {
  constructor(){
    super()
    this.state = {
      pokemon: [],
      userInput: ''
    }
  }

  renderPokemon = () => {
    return this.state.pokemon.filter( pokemon => pokemon.name.includes(this.state.userInput))
  }

  handleSearch = (event, data) => {
    this.setState({
      userInput: data.value
    })
  }

  submitPokemon = (newPokemon) => {
    this.setState({
      pokemon: [...this.state.pokemon, newPokemon]
    })
  }

  render() {
    return (
      <div>
        <h1>Pokemon Searcher</h1>
        <br />
        <Search onSearchChange={_.debounce(this.handleSearch, 500)} showNoResults={false} />
        <br />
        <PokemonCollection pokemons={this.renderPokemon()}/>
        <br />
        <PokemonForm submitPokemon={this.submitPokemon}/>
      </div>
    )
  }

  componentDidMount(){
    fetch('http://localhost:3000/pokemon')
    .then(resp => resp.json())
    .then(json => {
      console.log(json)
      this.setState({pokemon: json})
    })
  }
}

export default PokemonPage
