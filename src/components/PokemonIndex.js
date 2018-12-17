import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import { Search } from 'semantic-ui-react'
import _ from 'lodash'

class PokemonPage extends React.Component {

  state = {
    pokemon: [],
    userInput: ""
  }


  componentDidMount() {
    fetch('http://localhost:3000/pokemon')
      .then(res => res.json())
      .then(json => this.setState({
        pokemon: json
      }))
  }

  handleChange = (event, { value }) => {
    this.setState({
      userInput: value
    })
  }

  getFilteredPokemon = () => {
    return this.state.pokemon.filter(p => p.name.includes(this.state.userInput))
  }

  addAPokemon =(pokemon) =>{
    this.setState({
      pokemon: [pokemon, ...this.state.pokemon]
    })
  }

  render() {
    return (
      <div>
        <h1>Pokemon Searcher</h1>
        <br />
        <Search onSearchChange={_.debounce(this.handleChange, 500)} />
        <br />
        <PokemonForm addAPokemon={this.addAPokemon}/>
        <br />
        <PokemonCollection pokemon={this.state.pokemon} userInput={this.state.userInput} />
      </div>
    )
  }
}

export default PokemonPage
