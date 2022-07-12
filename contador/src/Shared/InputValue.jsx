import React, { Component } from 'react'

export default class InputValue extends Component {
  render() {
    return (
        <>
            <label>{this.props.title}</label>
            <input 
            onChange={ (e) => this.props.setLimit(e.target.value) } 
            placeholder={this.props.placeholder} />
        </>
    )
  }
}
