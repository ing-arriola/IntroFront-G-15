import React, { Component } from 'react'

export default class Person extends Component {
  render() {
    return (
      <li className='d-flex w-50 justify-content-between mb-4' > 
        <h3>{ `${this.props.name} ${this.props.lastname}` }</h3>
        <button className='btn btn-primary' onClick={()=>this.props.saludar(this.props.name,this.props.lastname)} > Saludar </button>
      </li>
    )
  }
}
