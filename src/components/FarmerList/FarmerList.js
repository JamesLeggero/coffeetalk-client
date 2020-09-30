import React, { useState, useEffect } from "react";
import axios from "axios";

import FarmerShow from "../FarmerShow/FarmerShow";

const FarmerList = (props) => {
  const [farmers, setFarmers] = useState([]);
  


  useEffect(() => {
    // Need to wrap this in an async function to use await inside:
    async function fetchData() {
      const response = await axios.get("https://jml-coffeetalk-api.herokuapp.com/farmers");
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
        const response = await axios.get(`https://jml-coffeetalk-api.herokuapp.com/farmers/${event.target.id}`)
        const data = await response.data
        
        // await console.log(data)
        await setFarmer({...farmer, ...data})
        await console.log(farmer)
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
        </div>
  )
      
};

export default FarmerList;
