import React from 'react'

function FarmerSignUp(props) {

    return (
        <>
            <form
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





            </form>

        </>
    )
}

export default FarmerSignUp