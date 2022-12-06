import React from 'react'

const Nav = (props)=>(
    <nav class="nav">
            <div class="logo">
              <img src={props.logo} style={props.logoStyle} alt=""/>
            </div>
            <ul class="models">
              <li><a href="#">Model S</a></li>
              <li><a href="#">Model 3</a></li>
              <li><a href="#">Model X</a></li>
              <li><a href="#">Model Y</a></li>
              <li><a href="#">Powerwall</a></li>
              <li><a href="#">Charging</a></li>
            </ul>
            <ul class="menu">
              <li><a href="#">Support</a></li>
              <li><a href="#">Shop</a></li>
              <li><a href="#">Account</a></li>
              <li><a href="#">Menu</a></li>
            </ul> 
        </nav>
)

export default Nav