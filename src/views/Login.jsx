import React, { useCallback, useContext } from "react";
import { withRouter, Redirect } from "react-router";
import { Link } from "react-router-dom";
import { AuthContext } from "../components/AuthProvider";
import firebase from "../utils/firebase";

const Login = ({ history }) => {
  const handleLogin = useCallback(
    async (e) => {
      e.preventDefault();
      const { email, senha } = e.target.elements;

      try {
        await firebase
          .auth()
          .signInWithEmailAndPassword(email.value, senha.value);
        history.push("/");
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );

  const { user } = useContext(AuthContext);
  console.log(user);

  if (user) {
    return <Redirect to="/" />;
  }
  return (
    <div>
      <form onSubmit={handleLogin}>
        <label>
          Email
          <input name="email" type="email" placeholder="Email" />
        </label>
        <label>
          Password
          <input name="senha" type="password" placeholder="senha" />
        </label>
        <button type="submit">Log in</button>
      </form>
      <Link to="/cadastro">Cadastro</Link>
    </div>
  );
};

export default withRouter(Login);
