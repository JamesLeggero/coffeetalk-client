import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { Container } from 'react-bootstrap'

function FarmerSignUp(props) {

    return (
        <>
            {/* <form
            onSubmit={props.handleFarmerSignup}
            >
                <input type='text' name='username' placeholder='Username' onChange={props.handleFarmerInput}/>
                <input type='text' name='phoneNumber' placeholder='Phone Number' onChange={props.handleFarmerInput}/>
                <input type='text' name='imageURL' placeholder='Image URL' onChange={props.handleFarmerInput}/>
                <select name='farmerLocation' onChange={props.handleFarmerInput}>
                    <option>Please choose region...</option>
                    <option value='343137'>Awasa, ET</option>
                    <option value='3606251'>Santa Barbara, HN</option>
                    <option value='1215502'>Banda Aceh, ID</option>
                </select>
                <input type='submit' value='Sign Up for CT' />





            </form> */}
            <Container style={{
                padding: '50px 400px'
            }}>

                <h2>Farmer Sign Up</h2>

            <Form onSubmit={props.handleFarmerSignup}>

                <Form.Group>
                    <Form.Label>Username</Form.Label>
                    <Form.Control type='text' name='username' placeholder='Enter new username' onChange={props.handleFarmerInput} />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control type='text' name='phoneNumber' placeholder='Enter new phone number' onChange={props.handleFarmerInput} />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Image URL</Form.Label>
                    <Form.Control type='text' name='imageURL' placeholder='Enter new image URL' onChange={props.handleFarmerInput} />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Region</Form.Label>
                    <Form.Control as='select'>
                    <option>Please choose region...</option>
                    <option value='343137'>Awasa, ET</option>
                    <option value='3606251'>Santa Barbara, HN</option>
                    <option value='1215502'>Banda Aceh, ID</option>
                    </Form.Control>
                </Form.Group>

                <Button style={{float: 'right'}} variant='dark' type='submit'>Sign Up New Farmer</Button>

            </Form>
            </Container>

        </>
    )
}

export default FarmerSignUp