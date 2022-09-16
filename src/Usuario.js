import React from 'react';
import { Link } from "react-router-dom";

export default function Usuario(){

   return (
      <div>
      <h1>Página do usuário</h1>
      <h2>Faça seu acesso em <Link to="Home">Home</Link></h2>
      <Link to="/">retornar a página inicial</Link>
  </div>
   );
}