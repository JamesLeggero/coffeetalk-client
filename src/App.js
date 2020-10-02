import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch, useHistory, Link } from "react-router-dom";
import axios from "axios";
import { v1 as uuid } from 'uuid'

import CreateRoom from './components/CreateRoom/CreateRoom'
import Room from './components/Room/Room'
import FarmerList from './components/FarmerList/FarmerList'
import WeatherTest from './components/WeatherTest/WeatherTest'
import Lobby from './components/Lobby/Lobby'
import FarmerShow from './components/FarmerShow/FarmerShow'

function App() {

  // const [roasterState, setRoasterState] = useState({
  //   username: '',
  //   password: '',
  //   isLoggedin: false
  // })

  
  // const [roasterIsLoggedIn, setRoasterisLoggedIn] = useState(false)

  // useEffect(() => {
  //   if (localStorage.token) {
  //     setRoasterisLoggedIn(true)
  //   } else {
  //     setRoasterisLoggedIn(false)
  //   }
  // }, [roasterIsLoggedIn])

  const [location, setLocation] = useState({})
  
  // // const [farmers, setFarmers] = useState([]);
  // // useEffect(() => {
  // //   // Need to wrap this in an async function to use await inside:
  // //   async function fetchData() {
  // //     const response = await axios.get("http://localhost:3001/farmers");
  // //     setFarmers(response.data);
  // //   }
  // //   fetchData();
  // // }, [farmers]);

  const [farmer, setFarmer] = useState({})

  useEffect(() => { }, [farmer])

  

  const history = useHistory()
  
  const createRoom = (data) => {
    const id = uuid();
    const roomID = `/room/${id}`
    // props.history.push(roomID)
    const roomURL = `http://localhost:3000${roomID}`
    history.push(`/room/${id}`, {state: {farmer: data}})
  
    // console.log(roomURL)
    // return roomID
    
  }
  
  const handleCreateRoom = async event => {
    event.persist()
    try {
      const farmerResponse = await axios.get(`http://localhost:3001/farmers/${event.target.id}`)
      const farmerData = await farmerResponse.data
      // await console.log(`http://localhost:3001/${farmerData.farmerLocation}`)
      setFarmer({ ...farmer, ...farmerData })
      //weather
      // await console.log(location)

      // weatherHit(farmerData)
      // await console.log(location.name)
      // smsHit(farmerData)

      createRoom(farmerData)
    } catch (error) {
      console.error(error)
    }
  }

  // // const handleCreateRoom = event => {
  // //   event.persist()
  // //   console.log('clicked')
  // // }

  // const pop = event => {
  //   event.persist()
  //   console.log('popclick')
  // }



  // const weatherHit = async data => {
  //   try {
  //     const weatherResponse = await axios.get(`http://localhost:3001/weather/${data.farmerLocation}`)
  //     const weatherData = await weatherResponse.data
  //     setLocation({ ...weatherData })
  //   } catch (error) {
  //     console.error(error)
  //   }

  // }

  // const smsHit = async data => {
  //   const smsResponse = await axios.get(`http://localhost:3001/sms/${data.phoneNumber}`)
  //   const smsData = await smsResponse.data
  //   console.log('calling: ', smsData)


  // }

  // const showFarmers = farmers.map((farmer, i) => {
  //   return (
  //     <div key={farmer._id}>
  //       <FarmerShow farmer={farmer} roasterIsLoggedIn={roasterIsLoggedIn} handleCreateRoom={handleCreateRoom} />
  //     </div>
  //   );
  // });

  const testOb = {
    test: 'one',
    this: 'two',
    thing: 'three'
  }


  return (
    <div className="App">
      <FarmerList handleCreateRoom={handleCreateRoom}/>
      {/* <WeatherTest /> */}
      {/* <Router> */}
      <Switch>
        {/* <Route path='/' exact component={Lobby} handleCreateRoom={handleCreateRoom} pop={pop}/> */}
        {/* <Route path='/' exact component={Lobby}>
          <Lobby pop={pop} handleCreateRoom={handleCreateRoom}/>
        </Route> */}
        <Route path='/' exact component={Lobby} />
        {/* <Route path='/room/:roomID/' exact component={Room} /> */}
        <Route path='/room/:roomID' render={(props)=><Room testOb={testOb} farmer={farmer} {...props}/>} />
        
          {/* <Room farmer={farmer} location={location}/> */}
       
      </Switch>
      {/* </Router> */}
      
    </div>
  );
}

export default App;
