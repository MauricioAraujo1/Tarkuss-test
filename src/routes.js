import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Login from "./containers/Login"
import Cadastro from "./containers/Cadastro"
import Perfil from "./containers/Perfil"

function Routes(){

        return(
            <Router>
                <Switch>
                <Route exact path="/" component={Login}/>
                <Route exact path="/cadastro" component={Cadastro}/>
                <Route exact path="/perfil" component={Perfil}/>
                </Switch>
            </Router>
        )

}

export default Routes