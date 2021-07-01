import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Header from './Header';

function RandomBeer() {
   
    const[randomBeer, setRandomBeer] = useState({});

   useEffect(async () => {
   let res = await axios.get(`https://ih-beers-api2.herokuapp.com/beers/random`)
   console.log(res.data)
   setRandomBeer(res.data)
   }, [])


    return (
        <div>
            <Header/>

            <div classsName="beer-details">
             <div>
               <img width="60px" src = {randomBeer.image_url}/>
             </div>
             <article className="beer-description">
               <div className = "beer-info">
                <h2>{randomBeer.name}</h2>
                <p>{randomBeer.attenuation_level}</p>
               </div>
               <div className = "beer-info">
                <p>{randomBeer.tagline}</p>
                <p>{randomBeer.first_brewed}</p>
               </div>
                 <p>{randomBeer.description}</p>
                 <p>{randomBeer.contributed_by}</p>
             </article>
           </div>
        </div>
    )
}

export default RandomBeer
