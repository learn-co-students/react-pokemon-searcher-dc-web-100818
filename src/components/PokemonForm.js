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

  onNameChange = (event) => {
    this.setState({
      name: event.target.value
    })
  }

  onHPChange = (event) => {
    this.setState({
      hp: event.target.value
    })
  }

  onFrontChange = (event) => {
    this.setState({
      frontUrl: event.target.value
    })
  }

  onBackChange = (event) => {
    this.setState({
      backUrl: event.target.value
    })
  }

  handleSubmit = () => {
    fetch('http://localhost:3000/pokemon', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(
        {name: this.state.name,
            stats:[
              {value: this.state.hp,
              name: 'hp'
              }
            ],
            sprites: {
              front: this.state.frontUrl,
              back: this.state.backUrl}}
            )
      }).then(res => res.json())
      .then(newPokemon => this.props.addPokemon(newPokemon))
    }

  render() {
    return (
      <div>
        <h3>Add a Pokemon!</h3>
        <Form onSubmit={this.handleSubmit} >
          <Form.Group widths="equal">
            <Form.Input fluid label="Name" placeholder="Name" name="name" onChange={this.onNameChange} />
            <Form.Input fluid label="hp" placeholder="hp" name="hp" onChange={this.onHPChange} />
            <Form.Input fluid label="Front Image URL" placeholder="url" name="frontUrl" onChange={this.onFrontChange} />
            <Form.Input fluid label="Back Image URL" placeholder="url" name="backUrl" onChange={this.onBackChange} />
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default PokemonForm
