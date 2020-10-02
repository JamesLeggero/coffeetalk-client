import React from "react";
// import "./FarmerShow.css";

function FarmerShow(props) {
  const { imageUrl, username, _id } = props.farmer;

  return (
    <div className="farmer-preview">
      {imageUrl ? 
      <img src={imageUrl} alt={username} className="farmer-image" /> :
      ''
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
