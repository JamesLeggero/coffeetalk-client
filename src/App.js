import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import axios from "axios";

import CreateRoom from './components/CreateRoom/CreateRoom'
import Room from './components/Room/Room'
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
      <FarmerList />
      <Switch>
        <Route path='/' exact component={CreateRoom} />
        <Route path='/room/:roomID' exact component={Room}
        />
      </Switch>
      
    </div>
  );
}

export default App;
