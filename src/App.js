import React, { useContext, useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './assets/style.css';

import Sidebar from "./components/Sidebar";

import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import Home from "./pages/Home";
import NotFound from './pages/404';
import { useGlobalContext } from './context/context';




function App() {
  const { handleSignup, token } = useGlobalContext()

  //const [isLoading, setIsLoading] = useState(true)

  //const {token} = useContext(firebaseAuth)


  

  //if(isLoading) return <Loading />
  return (
    <>
      <Router>
        <Sidebar />
        <Switch>
          <Route exact path='/' render={rProps => token === null ? <Signin /> : <Home />} />
          <Route exact path='/signin' component={Signin} />
          <Route exact path="/" component={Signup}
          />
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
