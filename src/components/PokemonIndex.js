import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import { Search } from 'semantic-ui-react'
import _ from 'lodash'

class PokemonPage extends React.Component {

  constructor() {
    super()
    this.state = {
      pokemon:[],
      searchValue: "",
    }
  }

  componentDidMount() {
    fetch('http://localhost:3000/pokemon')
    .then(res => res.json())
    .then(data => {
      this.setState({
        pokemon:data,
      }, console.log(data))
    })
  }

  handleSearchChange = (e, {value}) => {
    this.setState({
      searchValue: value
    })
  }

  pokeSearch = () => {
    let search = this.state.searchValue;
    if (search !== "") {
      let filtered = this.state.pokemon.filter( pokemon =>
        pokemon.name.includes(search)
      )
      return filtered;
    } else {
      return this.state.pokemon
    }
  }



  render() {
    return (
      <div>
        <h1>Pokemon Searcher</h1>
        <br />
        <Search onSearchChange={_.debounce(this.handleSearchChange, 500)} showNoResults={false} value={this.state.SearchValue}/>
        <br />
        <PokemonCollection pokemon={this.pokeSearch()}/>
        <br />
        <PokemonForm />
      </div>
    )
  }
}

export default PokemonPage
