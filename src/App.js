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
import Navbar from './components/Navbar/Navbar'
import FarmerSignUp from "./components/FarmerSignUp/FarmerSignUp";
import RoasterSignUp from './components/RoasterSignUp/RoasterSignUp'
import RoasterLogIn from './components/RoasterLogIn/RoasterLogIn'

function App() {

  const [roasterState, setRoasterState] = useState({
    username: '',
    password: '',
    isLoggedin: false
  })

  
  const [roasterIsLoggedIn, setRoasterIsLoggedIn] = useState(false)

  useEffect(() => {
    if (localStorage.token) {
      setRoasterIsLoggedIn(true)
    } else {
      setRoasterIsLoggedIn(false)
    }
  }, [roasterIsLoggedIn])

  const [farmerState, setFarmerState] = useState({
      username: '',
      password: '',
      farmerLocation: '',
      phoneNumber: '',
      imageURL: '',
      farmerIsLoggedIn: false
    })
  
    
    const [farmerIsLoggedIn, setFarmerIsLoggedIn] = useState(false)
  
    useEffect(() => {
      if (localStorage.token) {
        setFarmerIsLoggedIn(true)
      } else {
        setFarmerIsLoggedIn(false)
      }
    }, [farmerIsLoggedIn])

  const [location, setLocation] = useState({})
  
  // // const [farmers, setFarmers] = useState([]);
  // // useEffect(() => {
  // //   // Need to wrap this in an async function to use await inside:
  // //   async function fetchData() {
  // //     const response = await axios.get("https://jml-coffeetalk-api.herokuapp.com/farmers");
  // //     setFarmers(response.data);
  // //   }
  // //   fetchData();
  // // }, [farmers]);

  const [farmer, setFarmer] = useState({})

  useEffect(() => { }, [farmer])

  

  const history = useHistory()
  
  const createRoom = (dataA, dataB) => {
    const id = uuid();
    const roomID = `${id}${dataA}${dataB}`
    axios.get(`https://jml-coffeetalk-api.herokuapp.com/sms/${roomID}`)
    
    // props.history.push(roomID)
    history.push(`/room/${roomID}`)
  
    // console.log(roomURL)
    // return roomID
    
  }
  
  const handleCreateRoom = async event => {
    event.persist()
    try {
      const farmerResponse = await axios.get(`https://jml-coffeetalk-api.herokuapp.com/farmers/${event.target.id}`)
      const farmerData = await farmerResponse.data
      // await console.log(`https://jml-coffeetalk-api.herokuapp.com/${farmerData.farmerLocation}`)
      setFarmer({ ...farmer, ...farmerData })
      //weather
      // await console.log(location)

      // weatherHit(farmerData)
      // await console.log(location.name)
      // smsHit(farmerData)
      
      await createRoom(farmerData._id, localStorage.roasterID)
    } catch (error) {
      console.error(error)
    }
  }

  const handleFarmerInput = (event) => {
    setFarmerState({ ...farmerState, [event.target.name]: event.target.value });
  };

  const handleFarmerSignup = async event => {
    event.preventDefault();
    try {
      const response = await axios.post("https://jml-coffeetalk-api.herokuapp.com/farmers/signup", {
        username: farmerState.username,
        password: farmerState.password,
        farmerLocation: farmerState.farmerLocation,
        phoneNumber: farmerState.phoneNumber,
        imageURL: farmerState.imageURL
      });
      // console.log(response);
      localStorage.token = response.data.token;
      setFarmerIsLoggedIn(true);
      window.history.back()
    } catch (err) {
      console.log(err);
    }
  }

  const handleRoasterInput = (event) => {
    setRoasterState({ ...roasterState, [event.target.name]: event.target.value });
  };

  const handleRoasterSignup = async event => {
    event.preventDefault();
    try {
      const response = await axios.post("https://jml-coffeetalk-api.herokuapp.com/roasters/signup", {
        username: roasterState.username,
        password: roasterState.password,
      });
      // console.log(response);
      localStorage.token = response.data.token;
      localStorage.roasterID = response.data.id
      setRoasterIsLoggedIn(true);
      history.push('/')
    } catch (err) {
      console.log(err);
    }
  }

  const handleRoasterLogIn = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("https://jml-coffeetalk-api.herokuapp.com/roasters/login", {
        username: roasterState.username,
        password: roasterState.password,
      });
      localStorage.token = response.data.token;
      localStorage.roasterID = response.data.id
      setRoasterIsLoggedIn(true);
      history.push('/')
    } catch (error) {
      console.log(error);
    }
  };

  const handleLogOut = (event) => {
    event.preventDefault()
    // setRoasterState({
    //   username: "",
    //   password: "",
    //   isLoggedIn: false,
    // });
    // setFarmerState({
    //   username: '',
    //   password: '',
    //   farmerLocation: '',
    //   phoneNumber: '',
    //   imageURL: '',
    //   farmerIsLoggedIn: false
      
    // })
    setRoasterIsLoggedIn(false)
    setFarmerIsLoggedIn(false)
    localStorage.clear()
    // history.push('/')
    
    
  };

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
  //     const weatherResponse = await axios.get(`https://jml-coffeetalk-api.herokuapp.com/weather/${data.farmerLocation}`)
  //     const weatherData = await weatherResponse.data
  //     setLocation({ ...weatherData })
  //   } catch (error) {
  //     console.error(error)
  //   }

  // }

  // const smsHit = async data => {
  //   const smsResponse = await axios.get(`https://jml-coffeetalk-api.herokuapp.com/sms/${data.phoneNumber}`)
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
      <Navbar farmerIsLoggedIn={farmerIsLoggedIn} roasterIsLoggedIn={roasterIsLoggedIn} handleLogOut={handleLogOut}/>
      <FarmerList handleCreateRoom={handleCreateRoom} roasterIsLoggedIn={roasterIsLoggedIn}/>
      {/* <WeatherTest /> */}
      {/* <Router> */}
      <Switch>
        {/* <Route path='/' exact component={Lobby} handleCreateRoom={handleCreateRoom} pop={pop}/> */}
        {/* <Route path='/' exact component={Lobby}>
          <Lobby pop={pop} handleCreateRoom={handleCreateRoom}/>
        </Route> */}
        <Route path='/' exact component={Lobby} />
        <Route path='/farmers/signup' render={props => {
          return (
            <FarmerSignUp farmerIsLoggedIn={farmerIsLoggedIn} handleFarmerSignup={handleFarmerSignup} handleFarmerInput={handleFarmerInput} />
          )
        }} />
        <Route path='/roasters/signup' render={props => {
          return (
            <RoasterSignUp roasterIsLoggedIn={roasterIsLoggedIn} handleRoasterSignup={handleRoasterSignup} handleRoasterInput={handleRoasterInput} />
          )
        }} />
        <Route path='/roasters/login' render={props => {
          return (
            <RoasterLogIn roasterIsLoggedIn={roasterIsLoggedIn}
            handleRoasterInput={handleRoasterInput}
            handleRoasterLogIn={handleRoasterLogIn} />
          )
        }} />
        
        {/* <Route path='/room/:roomID' render={(props)=><Room testOb={testOb} farmer={farmer} {...props}/>} /> */}
        <Route path='/room/:roomID' component={Room} />
        
          {/* <Room farmer={farmer} location={location}/> */}
       
      </Switch>
      {/* </Router> */}
      
    </div>
  );
}

export default App;
