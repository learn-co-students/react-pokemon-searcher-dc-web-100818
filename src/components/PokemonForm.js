import React from 'react'
import { Form } from 'semantic-ui-react'

class PokemonForm extends React.Component {
  constructor() {
    super()

    this.state = {
      name: '',
      hp: '',
      frontUrl: '',
      backUrl: ''
    }
  }

  onNameChange = (e) => {
    this.setState({
      name: e.target.value
    })
  }

  onHpChange = (e) => {
    this.setState({
      hp: e.target.value
    })
  }

  onFrontUrlChange = (e) =>{
    this.setState({
      frontUrl: e.target.value
    })
  }

  onBackUrlChange = (e) =>{
    this.setState({
      backUrl: e.target.value
    })
  }


  handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:3000/pokemon", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        name: this.state.name,
        stats: [{
          value: this.state.hp,
          name: "hp"
        }],
        sprites: {
          front: this.state.frontUrl,
          back: this.state.backUrl
        }
      })
    })
      .then(res => res.json())
      .then(newPokemon => this.props.addAPokemon(newPokemon))

  }

  render() {
    return (
      <div>
        <h3>Add a Pokemon!</h3>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group widths="equal">
            <Form.Input fluid label="Name" placeholder="Name" name="name" onChange={this.onNameChange} />
            <Form.Input fluid label="hp" placeholder="hp" name="hp" onChange={this.onHpChange} />
            <Form.Input fluid label="Front Image URL" placeholder="url" name="frontUrl" onChange={this.onFrontUrlChange} />
            <Form.Input fluid label="Back Image URL" placeholder="url" name="backUrl" onChange={this.onBackUrlChange} />
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default PokemonForm
