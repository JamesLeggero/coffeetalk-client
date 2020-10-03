import React from "react";
// import "./FarmerShow.css";

function FarmerShow(props) {
  const { imageURL, username, _id } = props.farmer;

  return (
    <div className="farmer-preview">
      {imageURL ? 
      <img src={imageURL} alt={username} className="farmer-image" /> : ''
      }
      <h3>{username}</h3>
      {/* {props.isLoggedIn ? <button>Coffeetalk with {username}</button> : ""} */}
      {props.roasterIsLoggedIn ? 
      <button id={_id} onClick={props.handleCreateRoom}>Coffeetalk with {username}</button>
      : ''
      }
    </div>
  );
}

export default FarmerShow;
