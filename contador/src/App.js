import React, { Component } from 'react'
import logo from './logo.svg';
import './App.css';

export class App extends Component {
  //Funcion especial para inicializar nuestro objeto que es un componente de React
  constructor(){
    super()
    this.state={
      contador:0,
      limiteInferior:0,
      limiteSuperior:12
    }
    this.aumentarContador = this.aumentarContador.bind(this) // se debe esto por cada funcion
    this.disminuirContador = this.disminuirContador.bind(this)
  }

  aumentarContador(){
    // this.state.contador = this.state.contador +1 error!! no podemos modificar el estado directamente
    // necesitamos usar el setState para modificar nuestro estado
    if(this.state.contador < 21)
    this.setState({ contador : this.state.contador  + 1 }) // acumulador en sintaxis de React CBC
    // x = x + 1 nuestro objetivo en esta funcion es un acumulador
  }

  disminuirContador(){
    if(this.state.contador > this.state.limiteInferior)
    this.setState({ contador : this.state.contador  - 1 }) 
  }

  resetState(){
    this.setState({ contador : 0 }) 
  }

  establecerLimiteInferior(nuevoLimite){
    this.setState({ limiteInferior:nuevoLimite })
  }

  render() {
    return (
    <div className="App App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Aplicacion de contador
        </p>
        <p>
          { this.state.contador }
        </p>
        <p>
          {JSON.stringify(this.state)}
        </p>
        <label>Limite Inferior</label>
        <input 
        onChange={ (e) => this.establecerLimiteInferior(e.target.value) } 
        placeholder='Ingresa el limite Inferior' />
        <button onClick={ this.aumentarContador } >UP</button>
        <button onClick={ this.disminuirContador } >Down</button>
        <button onClick={ () => this.resetState() } >Reset</button>
    </div>
    )
  }
}
