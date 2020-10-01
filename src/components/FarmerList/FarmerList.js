import React, { useState, useEffect } from "react";
import axios from "axios";

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

useEffect(() => {}, [farmer])



  const handleCreateRoom = async event => {
    event.persist()
    try {
        const farmerResponse = await axios.get(`http://localhost:3001/farmers/${event.target.id}`)
        const farmerData = await farmerResponse.data
        
        await console.log(`http://localhost:3001/${farmerData.farmerLocation}`)
        await setFarmer({...farmer, ...farmerData})
        const weatherResponse = await axios.get(`http://localhost:3001/${farmerData.farmerLocation}`)
        const weatherData = await weatherResponse.data
        await setLocation({...weatherData})
        await console.log(location)
        // await console.log(farmer)
        // await console.log(weatherData.name)
    } catch (error) {
        console.error(error)
    }
}

  const showFarmers = farmers.map((farmer, i) => {
    return (
      <div key={farmer._id}>
        <FarmerShow farmer={farmer} isLoggedIn={props.isLoggedIn} handleCreateRoom={handleCreateRoom}/>
      </div>
    );
  });

  return(
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
