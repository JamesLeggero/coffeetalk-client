import React, { useState, useEffect } from 'react'
import FarmerShow from '../FarmerShow/FarmerShow'
import axios from 'axios'

export default function Lobby(props) {

//     const [farmers, setFarmers] = useState([]);
//   useEffect(() => {
//     async function fetchData() {
//       const response = await axios.get("http://localhost:3001/farmers");
//       setFarmers(response.data);
//     }
//     fetchData();
//   }, [farmers]);

//     const showFarmers = farmers.map((farmer, i) => {
//         return (
//           <div key={farmer._id}>
//             <FarmerShow farmer={farmer} roasterIsLoggedIn={props.roasterIsLoggedIn} handleCreateRoom={props.handleCreateRoom} />
//           </div>
//         );
//       });

    return (
        <>
        <h1> hello</h1>
        
        {/* {showFarmers} */}
        
        </>
    )
}