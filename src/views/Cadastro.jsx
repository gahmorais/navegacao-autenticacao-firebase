import React from "react";

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
    </div>
  );
};

export default Cadastro;
