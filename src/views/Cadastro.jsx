import React from "react";
import { Link } from "react-router-dom";

const Cadastro = (props) => {
    const handleSubmit = () =>{

    }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="email" name="email" id="email" placeholder="Email" />
        <input type="password" name="senha" id="senha" placeholder="Senha" />
        <input type="submit" value="Cadastrar" />
      </form>
      <Link to="/login">Login</Link>
    </div>
  );
};

export default Cadastro;
