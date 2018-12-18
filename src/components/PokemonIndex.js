import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import { Search } from 'semantic-ui-react'
import _ from 'lodash'

class PokemonPage extends React.Component {

  state = {
    pokemons: [],
    searchBar: ""
  }
  componentDidMount(){
    fetch("http://localhost:3000/pokemon")
    .then(res => res.json())
    .then(data => this.setState({pokemons: data}))
  }

  handleSearch = (e, {value}) =>{
    this.setState({
        searchBar: value
      })
  }

  addNewPokemon = (newData) =>{
    this.setState({
      pokemons: [...this.state.pokemons, newData]
    })
  }
  render() {
    const {value} = this.state
    return (
      <div>
        <h1>Pokemon Searcher</h1>
        <br />
        <Search value={value} onSearchChange={_.debounce(this.handleSearch, 500)} showNoResults={false} />
        <br />
        <PokemonCollection pokemons={this.state.pokemons} userInput={this.state.searchBar}/>
        <br />
        <PokemonForm pokemons={this.state.pokemons} addNewPokemon={this.addNewPokemon}/>
      </div>
    )
  }
}


export default PokemonPage
