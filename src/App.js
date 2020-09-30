import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import axios from "axios";

import FarmerList from './components/FarmerList/FarmerList'

function App() {

  const [roasterState, setRoasterState] = useState({
    username: '',
    password: '',
    isLoggedin: false
  })
  
  const [roasterIsLoggedIn, setRoasterisLoggedIn] = useState(false)

  useEffect(() => {
    if (localStorage.token) {
      setRoasterisLoggedIn(true)
    } else {
      setRoasterisLoggedIn(false)
    }
  }, [roasterIsLoggedIn])




  return (
    <div className="App">
      <Switch>
        <Route
        path='/'
        render={() => {
          return <FarmerList />
        }}
        />
      </Switch>
      
    </div>
  );
}

export default App;
