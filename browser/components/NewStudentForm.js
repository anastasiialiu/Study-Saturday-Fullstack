import React, { Component } from 'react';

export default class NewStudentForm extends Component {
    constructor(){
        super()
        this.state = {
            firstName: '',
            lastName: '',
            email: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleChange = (evt) => {
        this.setState({
        username: evt.target.value
    })
}
    handleSubmit = (evt) => {
        evt.preventDefault()
        console.log('Submitting:', JSON.stringify(this.state))
}

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          First Name:
          <input type="text" name="firstName" onChange= {this.handleChange} />
        </label>

        <label>
          Last Name:
          <input type="text" name="lastName" onChange= {this.handleChange}/>
        </label>

        <label>
          Email:
          <input type="email" name="email" onChange= {this.handleChange} />
        </label>

        <button type="submit">Submit New Student</button>
      </form>
    );
  }
}
