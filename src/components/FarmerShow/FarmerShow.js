import React from "react";
// import "./FarmerShow.css";
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import ComingSoon from '../../img/imageComingSoon.png'

function FarmerShow(props) {
  const { imageURL, username, _id } = props.farmer;

  return (
    <Card text='white' bg='secondary' style={{ width: "100%", minWidth: '10rem'}} border='secondary' className='text-center mb-3'>
      <Card.Header as='h5'>{username}</Card.Header>
      {imageURL ? 
      <Card.Img style={{padding: '10%'}} variant='top' src={imageURL} /> :
      <Card.Img style={{padding: '10%'}} variant='top' src={ComingSoon} /> 
      }
      <Card.Body>
      {props.roasterIsLoggedIn ? 
      <Button id={_id} onClick={props.handleCreateRoom} variant='dark'>Coffeetalk with {username}</Button>: ''}
      </Card.Body>
    </Card>
  );
}

export default FarmerShow;
