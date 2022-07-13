import React, { Component } from 'react'

export default class Button extends Component {
  render() {
    return (
        <button onClick={this.props.handleClick}  
                //style={{background:this.props.color ? 'red' : 'blue' }} 
                className={this.props.clase}
                >
                {this.props.label}
        </button>
    )
  }
}
