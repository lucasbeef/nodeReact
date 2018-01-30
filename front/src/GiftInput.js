import React from 'react'

class GiftInput extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: ""
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    this.setState({name: event.target.value})
  }

  handleSubmit(event) {
    event.preventDefault()
    if (!this.state.name) {
      alert("Peux-tu me donner le nom de ton cadeau s'il te plaît ?")
    }
    else {
      this.props.onSubmit(this.state.name)
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" onChange={this.handleChange} ref="giftName" />
        <button type="submit"> Ajouter </button>
      </form>
    )
  }
}

export default GiftInput
