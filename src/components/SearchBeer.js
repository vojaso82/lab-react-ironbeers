import React, { useState, useEffect } from 'react';
import axios from 'axios';


function SearchBeer() {

    const[searchBeer, setSearchBeer] = useState([]);

    const search = async (e) => {
        
          let res = await axios.get(`https://ih-beers-api2.herokuapp.com/beers/search?q=${e.target.value}`)
  
          setSearchBeer(res.data);

      }
     
    const searchForBeer = () => {
        if(searchBeer.length > 0){
            return searchBeer.map((eachBeer) => {
                return (
                    <div>
                        <img src = {eachBeer.image_url} width="50vw"/>
                        <h2> {eachBeer.name} </h2>
                        <p> {eachBeer.tagline} </p>
                        <p> {eachBeer.contributed_by} </p>
                    </div>
                )
            })
        }else return <div>That beer does not exist in our database</div>
        
    }
    

    return (
        <div>
            <input onChange = {search} name="name" placeholder = "search" type = "text"/>
            <div>
                {searchForBeer()}
            </div>
        </div>
    )
}

export default SearchBeer
