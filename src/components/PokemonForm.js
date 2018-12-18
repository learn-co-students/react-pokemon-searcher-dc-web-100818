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

  onFormChanges = (e) =>{
    let targetName = e.target.name
    let targetValue = e.target.value
    this.setState({
      [targetName]: targetValue
    })


    console.log("changing", targetName, targetValue)
  }

  handleSubmit = (e) => {
    e.preventDefault()
    let data = {
      name: this.state.name,
      stats: [
      {value: this.state.hp,
        name: 'hp'
      }],

      sprites: {front: this.state.frontUrl,
        back: this.state.backUrl}
    }
    fetch("http://localhost:3000/pokemon", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(newData => this.props.addNewPokemon(newData))

    console.log("submitted")
  }
  render() {
    return (
      <div>
        <h3>Add a Pokemon!</h3>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group widths="equal">
            <Form.Input fluid label="Name" placeholder="Name" name="name" onChange={this.onFormChanges}/>
            <Form.Input fluid label="hp" placeholder="hp" name="hp" onChange={this.onFormChanges} />
            <Form.Input fluid label="Front Image URL" placeholder="url" name="frontUrl" onChange={this.onFormChanges}/>
            <Form.Input fluid label="Back Image URL" placeholder="url" name="backUrl" onChange={this.onFormChanges}/>
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default PokemonForm
