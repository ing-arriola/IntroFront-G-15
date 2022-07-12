import React, { Component } from 'react'

export default class Button extends Component {
  render() {
    return (
        <button onClick={this.props.handleClick}  
                style={{background:this.props.color ? 'red' : 'blue' }} >
                {this.props.label}
        </button>
    )
  }
}
