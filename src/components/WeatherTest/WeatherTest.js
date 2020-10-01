import React, { useState, useEffect} from 'react'
import axios from 'axios'

export default function WeatherTest(props) {

    const [location, setLocation] = useState({})

    const [query, setQuery] = useState({
        cityID: ''
    })

    // useEffect(()=>{
    //     query.cityID.length > 0 &&
    //     (async () => {
    //         try {
    //             // await console.log(query.cityID)
    //             const response = await axios.get(`http://localhost:3001/${query.cityID}`)
    //             const data = await response.data
    //             await console.log(data)
    //             await setLocation({...location, ...data})
    //             // setQuery({...query, cityId: ''})
    //         } catch (error) {
    //             console.error(error)
    //         }
    //     })()
    // }, [query])




    const handleSubmit = async event => {
        event.preventDefault()
        try {
            // await console.log(query.cityID)
            const response = await axios.get(`http://localhost:3001/${query.cityID}`)
            const data = await response.data
            await console.log(data)
            await setLocation({...location, ...data})
            // setQuery({...query, cityId: ''})
        } catch (error) {
            console.error(error)
        }
        // console.log('submitted')
        // console.log(query.cityID)
        // setQuery({
        //     ...query, cityID: `${query.cityID}`
        // })     
    }

    const handleChange = event => {
        setQuery({ ...query, ...{ [event.target.id]: event.target.value } });
        console.log('changed')
    } 





    return (
        <div>
            {Object.keys(location).length > 0 &&
            <div className='location'>
                <h1>{location.name}</h1>
                
            </div>
            }
            <form onSubmit={handleSubmit}>
                <label htmlFor='region' />
                <select name='Region' id='cityID' value={query.cityID} onChange={handleChange}>
                    <option>Please choose region...</option>
                    <option value='343137'>Awasa, ET</option>
                    <option value='3606251'>Santa Barbara, HN</option>
                    <option value='1215502'>Banda Aceh, ID</option>
                </select>
                <input type='submit' value='Check Weather' />
            </form>
        </div>

    )
}