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

  handleSubmit = () => {
    let newStats = []
    newStats.push({
      "value": this.state.hp,
      name: "hp"
    })

    let newSprites = {
      front: this.state.frontUrl,
      back: this.state.backUrl
    }

    let data = {
      name: this.state.name,
      stats: newStats,
      sprites: newSprites
    }

    fetch(`http://localhost:3000/pokemon`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8"
      },
      body: JSON.stringify(data)
    }).then(res => res.json())
      .then(data => {
        this.props.postPokemon(data)
      })
  }

  handleChange = (event) => {
    console.log(event.target.name)
      this.setState({
        [event.target.name]: event.target.value
      })
  }

  render() {
    return (
      <div>
        <h3>Add a Pokemon!</h3>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group widths="equal">
            <Form.Input fluid onChange={this.handleChange} label="Name" placeholder="Name" name="name" />
            <Form.Input fluid onChange={this.handleChange} label="hp" placeholder="hp" name="hp" />
            <Form.Input fluid onChange={this.handleChange} label="Front Image URL" placeholder="url" name="frontUrl" />
            <Form.Input fluid onChange={this.handleChange} label="Back Image URL" placeholder="url" name="backUrl" />
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default PokemonForm
