import React from 'react'
import { Form, Container, Button } from 'react-bootstrap'

function RoasterSignUp(props) {

    return (
        <>
            {/* <form
            onSubmit={props.handleRoasterSignup}
            >
                <input type='text' name='username' placeholder='Username' onChange={props.handleRoasterInput}/>
                <input type='password' name='password' placeholder='Password' onChange={props.handleRoasterInput}/>
                <input type='submit' value='Sign Up for CT' />





            </form> */}

<Container style={{
                padding: '50px 400px'
            }}>
                <h2>Roaster Sign Up</h2>
            <Form onSubmit={props.handleRoasterSignup}>

                

                <Form.Group>
                    <Form.Label>Username</Form.Label>
                    <Form.Control type='text' name='username' placeholder='Enter new username' onChange={props.handleRoasterInput} />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type='password' name='password' placeholder='Enter new password' onChange={props.handleRoasterInput} />
                </Form.Group>


                <Button style={{float: 'right'}} variant='dark' type='submit'>Sign Up New Roaster</Button>

            </Form>
            </Container>

        </>
    )
}

export default RoasterSignUp