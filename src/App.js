import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css';

import Users from './Components/Users/Users'
import About from './Components/About/About'
import Home from './Components/Home'
import NavBar from './Components/NavBar/NavBar';
import store from "./redux/store";
import { Provider } from "react-redux";
import UserDetails from './Components/UserDetails/UserDetails';

function App() {
  return (
    <div className="container">
      <Router>
        <NavBar />
        <Switch>
          <Provider store={store}>
            <Route path={"/"} exact component={Home} />
            <Route path={"/about"} component={About} />
            <Route path={"/users"} exact component={Users} />
            <Route path={"/users/:username"} component={UserDetails} /> 
            {/* dynamic routing /users/:username*/}
          </Provider>
        </Switch>
      </Router>

    </div>
  );
}

export default App;