import React from 'react';
import './App.css';


import Home from "./pages/index";
import {Route, Switch} from "react-router-dom";
import SignInPage from "./pages/signIn";
import SignUpPage from "./pages/signUp";
function App() {
  return (
    <Switch>
        <Route  exact path="/signup" component={SignUpPage}/>
        <Route  exact path="/signin" component={SignInPage}/>
      <Route  exact path="/" component={Home}/>

    </Switch>
  );
}

export default App;
