import React from 'react';
import { Link } from "react-router-dom";

export default function Informacoes(){
   return (
      <div>
      <h1>Suas informações:</h1>
      <Link to="/">retornar a página inicial</Link>
  </div>
   );
}