import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { AuthProvider } from "./components/AuthProvider";
import { PrivateRoute } from "./components/PrivateRoute";
import Cadastro from "./views/Cadastro";
import Login from "./views/Login";
import Home from "./views/Home";
import Tabela from "./views/Tabela";

const App = (props) => {
  return (
    <AuthProvider>
      <Router>
        <div>
          <PrivateRoute exact path="/" component={Home} />
          <PrivateRoute exact path="/tabela" component={Tabela  } />
          <Route exact path="/login" component={Login} />
          <Route exact path="/cadastro" component={Cadastro} />
        </div>
      </Router>
    </AuthProvider>
  );
};

export default App;
