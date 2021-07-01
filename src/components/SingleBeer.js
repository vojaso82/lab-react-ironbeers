import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from './Header';

function SingleBeer(props) {
  
    const[beer, setBeer] = useState({});

    useEffect(async () => {
    let res = await axios.get(`https://ih-beers-api2.herokuapp.com/beers/${props.match.params.beerId}`)
     console.log(res.data)
     setBeer(res.data)
    }, [props])

    return ( 
        <div>
          <Header/>
          
           <div classsName="beer-details">
             <div>
               <img width="60px" src = {beer.image_url}/>
             </div>
             <article className="beer-description">
               <div className = "beer-info">
                <h2>{beer.name}</h2>
                <p>{beer.attenuation_level}</p>
               </div>
               <div className = "beer-info">
                <p>{beer.tagline}</p>
                <p>{beer.first_brewed}</p>
               </div>
                 <p>{beer.description}</p>
                 <p>{beer.contributed_by}</p>
             </article>
           </div>

        </div>
    )
}

export default SingleBeer
