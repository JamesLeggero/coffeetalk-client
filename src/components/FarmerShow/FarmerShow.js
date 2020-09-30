import React from "react";
// import "./FarmerShow.css";

function FarmerShow(props) {
  const { imageUrl, username } = props.farmer;
  return (
    <div className="farmer-preview">
      <img src={imageUrl} alt={username} className="farmer-image" />
      <h3>{username}</h3>
      {props.isLoggedIn ? <button>Coffeetalk with {username}</button> : ""}
    </div>
  );
}

export default FarmerShow;
