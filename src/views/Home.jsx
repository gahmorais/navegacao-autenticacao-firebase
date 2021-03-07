import React from "react";
import { Link } from "react-router-dom";
import firebase from '../utils/firebase'

const Home = (props) => {
  const logout = () => {
      firebase.auth().signOut()
  };
  return (
    <div>
      <h1>Home</h1>
      <button onClick={logout}>Logout</button>
      <Link to="/tabela">Tabela</Link>
    </div>
  );
};

export default Home;
