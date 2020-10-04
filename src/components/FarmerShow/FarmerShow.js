import React from "react";
// import "./FarmerShow.css";
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

function FarmerShow(props) {
  const { imageURL, username, _id } = props.farmer;

  return (
    <Card text='white' bg='secondary' style={{ width: "100%", minWidth: '10rem'}} border='secondary' className='text-center'>
      <Card.Header as='h5'>{username}</Card.Header>
      {imageURL ? 
      <Card.Img fluid style={{padding: '10%'}} variant='top' src={imageURL} /> : ''
      }
      <Card.Body>
      {props.roasterIsLoggedIn ? 
      <Button id={_id} onClick={props.handleCreateRoom} variant='dark'>Coffeetalk with {username}</Button>: ''}
      </Card.Body>
    </Card>
  );
}

export default FarmerShow;
