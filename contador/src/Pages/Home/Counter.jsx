import React, { Component } from 'react'
import logo from '../../assets/logo.svg';
import './Counter.css';
import InputValue from '../../Shared/InputValue';
import Button from '../../Shared/Button';

export class Counter extends Component {
  //Funcion especial para inicializar nuestro objeto que es un componente de React
  constructor(){
    super()
    this.state={
      contador:0,
      limiteInferior:0,
      limiteSuperior:10,
      mensajes:[]
    }
    this.aumentarContador = this.aumentarContador.bind(this) // se debe esto por cada funcion
    this.disminuirContador = this.disminuirContador.bind(this)
    this.establecerLimiteInferior = this.establecerLimiteInferior.bind(this)
    this.establecerLimiteSuperior = this.establecerLimiteSuperior.bind(this)
  }

  aumentarContador(){
    // this.state.contador = this.state.contador +1 error!! no podemos modificar el estado directamente
    // necesitamos usar el setState para modificar nuestro estado
    if(this.state.contador < this.state.limiteSuperior)
    this.setState({ contador : this.state.contador  + 1 }) // acumulador en sintaxis de React CBC
    else this.setState({mensajes:[...this.state.mensajes,`El limite superior es ${this.state.limiteSuperior}`]})
    
    // x = x + 1 nuestro objetivo en esta funcion es un acumulador
  }

  disminuirContador(){
    if(this.state.contador > this.state.limiteInferior)
    this.setState({ contador : this.state.contador  - 1 }) 
    else this.setState({mensajes:[...this.state.mensajes,`El limite inferior es ${this.state.limiteInferior}`]})
  }

  resetState(){
    this.setState({ contador : 0 }) 
  }

  establecerLimiteInferior(nuevoLimite){
    console.log('holas')
    this.setState({ limiteInferior:nuevoLimite })
  }

  establecerLimiteSuperior(nuevoLimite){
    this.setState({ limiteSuperior:nuevoLimite })
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
    
        <InputValue 
            title='Limite Inferior' 
            placeholder='Ingresa el limite Inferior' 
            setLimit={this.establecerLimiteInferior}
        />
        <InputValue
            title='Limite Superior' 
            placeholder='Ingresa el limite Inferior' 
            setLimit={this.establecerLimiteSuperior}
        />
        <Button handleClick={this.aumentarContador} label='UP' color={true}  />
        <Button handleClick={this.disminuirContador} label='Down' color={false}  />

        <button onClick={ () => this.resetState() } >Reset</button>
        <ul>
            {
                this.state.mensajes.map( mensaje => (
                    <li>{mensaje}</li>
                ) )
            }
        </ul>
    </div>
    )
  }
}
