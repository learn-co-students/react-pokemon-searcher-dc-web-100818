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

  //setState can take a second argument - a callback function that will only be called AFTER setState has finished updating the current state
  handleSubmit = (event) =>{
    event.preventDefault()
    let inputFields = document.querySelectorAll('input')
    this.setState({
      name: inputFields[1].value,
      hp: inputFields[2].value,
      frontUrl: inputFields[3].value,
      backUrl: inputFields[4].value
    }, this.postNewPokemon)
  }

  postNewPokemon = () =>{
    let data = {
      "name": this.state.name,
      "stats": [
        {
          "value": this.state.hp,
          "name": "hp"
        }
      ],
      "sprites": {
        "front": this.state.frontUrl,
        "back": this.state.backUrl
      }
    }

    fetch('http://localhost:3000/pokemon', {
    method: "POST",
    headers: {
      "Content-Type": "application/json; charset=utf-8"
    },
    body: JSON.stringify(data)
    }).then(response => response.json()).then(newPokemon => this.props.addNewPokemon(newPokemon))
  }

  render() {
    return (
      <div>
        <h3>Add a Pokemon!</h3>
        <Form onSubmit={(event) => this.handleSubmit(event)}>
          <Form.Group widths="equal">
            <Form.Input fluid label="Name" placeholder="Name" name="name" />
            <Form.Input fluid label="hp" placeholder="hp" name="hp" />
            <Form.Input fluid label="Front Image URL" placeholder="url" name="frontUrl" />
            <Form.Input fluid label="Back Image URL" placeholder="url" name="backUrl" />
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default PokemonForm
