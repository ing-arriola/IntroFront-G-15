import logo from './logo.svg';
import React, {useState} from 'react' 
import './App.css';
import { Users } from './Pages/Users';
import {Test} from './Pages/Test'

const App = () => {
  const [search, setSearch] = useState('')
  return (
    <>
      <input  placeholder='user' value={search} onChange={e=> setSearch(e.target.value)} />
      {
        search === "hola" ? <Test/> : <Users/>
      }
    </>
  );
}

export default App;
