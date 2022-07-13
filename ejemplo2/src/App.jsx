import React, { Component } from 'react' //1. IMPORTS PROPIOS DE REACT
//2. LIBRERIAS DE TERCERO

//3. IMPORTS PROPIOS (COMPONENTES PROPIOS o ASSETS) DONDE CP > ASSETS
import logo from './logo.svg';
import './App.css';
import Person from './shared/Person';


export default class App extends Component {

  state={
    people:[
      {id:1,name:'John',lastname:'Ls1'},
      {id:2,name:'Mario',lastname:'Ls2'},
      {id:3,name:'Carlos',lastname:'Ls3'},
      {id:4,name:'Maria',lastname:'Ls4'},
      {id:5,name:'Erick',lastname:'Ls5'}
    ]
  }

  handleGreeting = (name,lastname) => {
    alert(`Hola ${name} ${lastname}`)
  }

  render() {
    return (
      <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ul className='w-100' >
          {
            this.state.people.map( 
                person => <Person 
                            id={person.id} 
                            name={person.name} 
                            lastname={person.lastname}
                            saludar={this.handleGreeting}
                          />  
            )
          }          
        </ul>
      </header>
    </div>
    )
  }
}


