import React from "react";
import { Form, Button, Container } from 'react-bootstrap'

function RoasterLogIn(props) {
  return (
    <div>
      

      {/* <form onSubmit={props.handleRoasterLogIn}>
        <div>
          
          <input type="text" name="username" placeholder='Username'onChange={props.handleRoasterInput} />
        </div>
        <div>
          
          <input type="password" placeholder='Password' name="password" onChange={props.handleRoasterInput} />
        </div>
        <input value="Log In" type="submit" />
      </form> */}

      <Container style={{
                padding: '50px 400px'
            }}>

              <h2>Roaster Log In</h2>

            <Form onSubmit={props.handleRoasterLogIn}>

                <Form.Group>
                    <Form.Label>Username</Form.Label>
                    <Form.Control type='text' name='username' placeholder='Enter username' onChange={props.handleRoasterInput} />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type='password' name='password' placeholder='Enter password' onChange={props.handleRoasterInput} />
                </Form.Group>

                <Button style={{float: 'right'}} variant='dark' type='submit'>Log In Roaster</Button>

            </Form>
            </Container>









    </div>
  );
}

export default RoasterLogIn;
