import React, {useState} from 'react';
import {Switch, Route, Link} from 'react-router-dom';
import Home from './Home';
import Usuario from './Usuario';
import Informacoes from './Informacoes';
import PaginaDoUsuario from './PaginaDoUsuario';

export default function App() {
  return (
      <>
    <header>
    <p><Link to='/home'>Home</Link></p>
     <p><Link to='/usuario'> Usuario </Link></p>
     <p><Link to='/informacoes'> Informacões </Link></p>
     <p><Link to='/PaginaDoUsuario'> PaginaDoUsuario </Link></p>
    </header>
    <main>
        <Switch>
          <Route path='/home' component= {Home}/>
          <Route path='/usuario' component= {Usuario}/>
          <Route path='/informacoes' component= {Informacoes}/>
          <Route path='/PaginaDoUsuario' component= {PaginaDoUsuario}/>
        </Switch>
      </main></>
  );
}
