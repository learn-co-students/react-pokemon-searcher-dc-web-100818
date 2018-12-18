import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import { Search } from 'semantic-ui-react'
import _ from 'lodash'

class PokemonPage extends React.Component {
  state = {
    pokemon: [],
  }

  componentDidMount() {
    fetch('http://localhost:3000/pokemon').then(res => res.json()).then(pokemon => this.setState({pokemon}))
  }



  filterPokemon = (val) => {
    console.log(val);

    return val ? this.state.pokemon.filter(poke => poke.name.includes(val)) : this.state.pokemon
  }

  getSearch = (event, {value}) => {
    this.setState({search: value})
    this.filterPokemon(value)
  }

  addNewPokemon = (poke) => {
    this.setState({pokemon: [...this.state.pokemon, poke]})
  }

  render() {
      const {value} = this.state
    return (
      <div>
        <h1>Pokemon Searcher</h1>
        <br />
        <Search onSearchChange={_.debounce(this.getSearch, 500)} showNoResults={false} value={value} />
        <br />
        <PokemonCollection pokemon={this.filterPokemon(this.state.search)}/>
        <br />
        <PokemonForm addPoke={this.addNewPokemon}/>
      </div>
    )
  }
}

export default PokemonPage
