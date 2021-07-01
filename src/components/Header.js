import { Link, Switch, Route } from 'react-router-dom';
import React from 'react'

function Header() {
    return (
<Link to= "/">
    <div style = {{display: "flex", justifyContent: "center"}}>
     <img src="https://user-images.githubusercontent.com/23629340/40707029-cb2fce12-63ef-11e8-939c-f673ff3b965d.png" height="100px" />
    </div>
</Link>
    )
}

export default Header
