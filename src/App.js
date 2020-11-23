import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './assets/style.css';
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import Home from "./pages/Home";
import NotFound from './pages/404';
import { useGlobalContext } from './context/context';

function App() {
  const { token } = useGlobalContext()
  
  return (
      <Router>
        <Switch>
          <Route exact path='/' render={rProps => token === null ? <Signin /> : <Home />} />
          <Route exact path='/signin' component={Signin} />
          <Route exact path="/signup" component={Signup}
          />
          <Route path="*" component={NotFound} />
        </Switch>
      </Router>
  );
}
export default App;
