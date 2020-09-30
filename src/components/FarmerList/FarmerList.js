import React, { useState, useEffect } from "react";
import axios from "axios";

import FarmerShow from "../FarmerShow/FarmerShow";

const FarmerList = (props) => {
  const [farmers, setFarmers] = useState([]);

  useEffect(() => {
    // Need to wrap this in an async function to use await inside:
    async function fetchData() {
      const response = await axios.get("http://localhost:3001/farmers");
      setFarmers(response.data);
    }
    fetchData();
  }, [farmers]);

  const showFarmers = farmers.map((farmer, i) => {
    return (
      <div key={i}>
        <FarmerShow farmer={farmer} isLoggedIn={props.isLoggedIn} />
      </div>
    );
  });

  return <div>{showFarmers}</div>;
};

export default FarmerList;
