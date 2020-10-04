import React, { useState, useEffect } from "react";
import { useHistory } from 'react-router-dom'
import axios from "axios";
import { v1 as uuid } from "uuid";
import CardDeck from 'react-bootstrap/Card'

import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row'
import CardGroup from 'react-bootstrap/CardGroup'


import FarmerShow from "../FarmerShow/FarmerShow";

const FarmerList = (props) => {
  const [farmers, setFarmers] = useState([]);
  const [location, setLocation] = useState({})



  useEffect(() => {
    // Need to wrap this in an async function to use await inside:
    async function fetchData() {
      const response = await axios.get("https://jml-coffeetalk-api.herokuapp.com/farmers");
      setFarmers(response.data);
    }
    fetchData();
  },[farmers]);

  const [farmer, setFarmer] = useState({
    // username: '',
    // location: '',
    // pNumber: '',
    // imageURL: ''
  })

  // useEffect(() => { }, [farmer])

  
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
  //     const farmerResponse = await axios.get(`https://jml-coffeetalk-api.herokuapp.com/farmers/${event.target.id}`)
  //     const farmerData = await farmerResponse.data
  //     // await console.log(`https://jml-coffeetalk-api.herokuapp.com/${farmerData.farmerLocation}`)
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

  const showFarmers = farmers.map((farmer, i) => {
    return (
      <div key={farmer._id}>
        <FarmerShow farmer={farmer} roasterIsLoggedIn={props.roasterIsLoggedIn} handleCreateRoom={props.handleCreateRoom} />
      </div>
    )
  })
  

  

  return (
    
      
    <Container className='text-center' style={{padding: '50px'}}>
      {
        props.roasterIsLoggedIn ?
        <h1>Welcome! Please select a farmer to begin your coffeetalk.</h1> :
      <h1>At Coffeetalk, we bring roasters and coffee farmers together. Sign up or log in to get started.</h1>
      } 
    <CardGroup  style={{
      display: 'flex', 
      flexDirection: 'row', 
      justifyContent: 'space-around',
      alignItems: 'center',
      padding: '20px'
    }}>
      {showFarmers}
    </CardGroup>
    </Container>
  
    
    
  )


  

};

export default FarmerList;
