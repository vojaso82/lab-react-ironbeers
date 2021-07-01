import { Link, Switch, Route } from 'react-router-dom';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Header from './Header';



function BeerList() {
    let [beerList, setBeerList] = useState([]);
    

    useEffect(async function(){
        let res = await axios.get(`https://ih-beers-api2.herokuapp.com/beers`);
        setBeerList(res.data)
        console.log(res.data)
    },[])

    
    const showBeerList = () => {
        return beerList.map((eachBeer) => {
            return (
                <div key = {eachBeer._id} className = "beer-list">
                    <div className = "beer-image">
                        <img src = {eachBeer.image_url} width="50"/>
                    </div>
                    <div className = "description">
                        <Link to= {`/beers/${eachBeer._id}`} ><h2> {eachBeer.name} </h2></Link>
                        <p> {eachBeer.tagline} </p>
                        <p>Created by: {eachBeer.contributed_by} </p>
                    </div>
                </div>
            )
        })
    }


    return (
        <div>
            <Header/>
             {showBeerList()}
        </div>
    )
}

export default BeerList
