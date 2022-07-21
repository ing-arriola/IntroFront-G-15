import logo from './logo.svg';
import React from 'react' 
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import { Users, NotFound, Photos, Posts, Home, SharedUsersLayout, SingleUser} from './Pages';


const App = () => {
  
  return (
    // 1. Definir como wrapper general de todos los componentes a BrowserRouter
    <BrowserRouter>
      {/* 2. <Routes> Indica los componentes que serviran como rutas de navegacion  */}
  
      <Link to='/' style={{marginRight:10}} >Home</Link>
      <Link to='posts'style={{marginRight:10}} >Posts</Link>
      <Link to='users' style={{marginRight:10}}>Users</Link>
      <Link to='photos' style={{marginRight:10}}>Photos</Link>

      <Routes>
        {/* 3. Definir rutas, las cuales tienen 2 props: path, element */}
        <Route path='/' element={<Home/>} />
        <Route path='posts' element={<Posts/>} />
        <Route path='photos' element={<Photos/>} />
        <Route path='users' element={<SharedUsersLayout/>}>
          <Route index element={<Users/>} />
          <Route path=':userId' element={<SingleUser/>} />
        </Route>
        <Route path='*' element={<NotFound/>}/>
      </Routes> 
    </BrowserRouter>
  );
}

export default App;
