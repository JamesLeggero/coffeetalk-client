import React, { useState, useEffect } from "react";
import { useHistory } from 'react-router-dom'
import axios from "axios";
import { v1 as uuid } from "uuid";

import FarmerShow from "../FarmerShow/FarmerShow";

const FarmerList = (props) => {
  const [farmers, setFarmers] = useState([]);
  const [location, setLocation] = useState({})



  useEffect(() => {
    // Need to wrap this in an async function to use await inside:
    async function fetchData() {
      const response = await axios.get("http://localhost:3001/farmers");
      setFarmers(response.data);
    }
    fetchData();
  }, [farmers]);

  const [farmer, setFarmer] = useState({
    // username: '',
    // location: '',
    // pNumber: '',
    // imageURL: ''
  })

  useEffect(() => { }, [farmer])

  
  // const history = useHistory()
  
  // const createRoom = () => {
  //   const id = uuid();
  //   const roomID = `/room/${id}`
  //   // props.history.push(roomID)
  //   const roomURL = `http://localhost:3000${roomID}`
  //   history.push(roomID)
  
  //   console.log(roomURL)
    
  // }
  
  // const handleCreateRoom = async event => {
  //   event.persist()
  //   try {
  //     const farmerResponse = await axios.get(`http://localhost:3001/farmers/${event.target.id}`)
  //     const farmerData = await farmerResponse.data
  //     // await console.log(`http://localhost:3001/${farmerData.farmerLocation}`)
  //     setFarmer({ ...farmer, ...farmerData })
  //     //weather
  //     // await console.log(location)
  //     weatherHit(farmerData)
  //     smsHit(farmerData)
  //     // await console.log(farmer)
  //     // await console.log(weatherData.name)
  //     await createRoom()
  //   } catch (error) {
  //     console.error(error)
  //   }
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

  const showFarmers = farmers.map((farmer, i) => {
    return (
      <div key={farmer._id}>
        <FarmerShow farmer={farmer} isLoggedIn={props.isLoggedIn} handleCreateRoom={props.handleCreateRoom} />
      </div>
    );
  });

  

  return (
    <div>
      {showFarmers}
      <h3>SELECTED: {farmer.username}</h3>
      {Object.keys(location).length > 0 &&
        <>
          <h3>City: {location.name}, {location.sys.country}</h3>
          <h3>WEATHER: {location.weather[0].description}</h3>
        </>
      }

    </div>
  )

  

};

export default FarmerList;
