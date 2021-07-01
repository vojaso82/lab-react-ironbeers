import React, { useState, useEffect } from 'react';
import Header from './Header';
import axios from 'axios';

function NewBeer() { 

    let [name, setName] = useState("");

    const handleChange = (e) => {
        // console.log(e.target.value, e.target.name)
        e.target.name = e.target.value
        setName(e.target.name)
    }
    
    const handleSubmit = async () => {
        let res = await axios.post(`https://ih-beers-api2.herokuapp.com/beers/new`, { name: name })

    }

    return (
        <div>{console.log(name)}
            <Header/>
            <form onSubmit = {handleSubmit}>
                
                <label>Beer Name
                   <input onChange = {handleChange} placeholder="Beer name" type="text" name="name"/>  
                </label>
                <br/>
                <label>Tagline
                <input onChange = {handleChange} placeholder="Tagline" type="text" name="tagline"/>
                </label>
                <button>Submit</button>

            </form>
        </div>
    )
}

export default NewBeer
