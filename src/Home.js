import React from 'react';
import { Switch, Route, Link } from "react-router-dom";
import PaginaDoUsuario from './PaginaDoUsuario';
import Usuario from './Usuario';

export default function Home(){
   return (
    <form action="/PaginaDoUsuario" method="GET"> <h1>Insira sua informações</h1> 
    
    <label for="nome">Nome: </label>
    <input type="text" id="nomeid" required="required" name="nome" />
    
    <label for="sobrenome"> Sobrenome: </label>
    <input type="text" id="sobrenomeid" required="required" name="sobrenome" />  
    
    <label for="fone"> Fone: </label>
    <input type="tel" id="foneid" placeholder="(xx) xxxxx-xxxx" required="required" name="fone" />
    
    <input type="submit" class="acessar" onclick="Acessar();" value="Acessar" />

    </form>
   );
}