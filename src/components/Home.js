import React from 'react'
import { Link, Switch, Route } from 'react-router-dom';

function Home() {
   



    return (
     <div className = "home">
        <Link to="/beers" >
        <div style = {{display: "flex", justifyContent: "center"}}>
        <img src="../assets/beers.png" height="200px" />
        </div>
        </Link>

        <Link to="/random-beer">
        <div style = {{display: "flex", justifyContent: "center"}}>
        <img src="../assets/random-beer.png" height="200px" />
        </div>
        </Link>

        <Link to="/new-beer">
        <div style = {{display: "flex", justifyContent: "center"}}>
        <img src="../assets/new-beer.png" height="200px" />
        </div>
        </Link>
     </div>
    )
}

export default Home
