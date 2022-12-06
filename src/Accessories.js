//Import React
import React from 'react'
//Import Footer component
import Footer from './Footer'
//Import images
import solar from './images/solar.png';
import modelwall from './images/modelwall.png';

//function to return css inserting image provided as parameter
const getImageStyle = (image)=>{
    const imageStyle = {
        backgroundImage:`url(${image})`,
        backgroundSize:'cover',
        backgroundPosition:'center center',
        backgroundRepeat:'no-repeat',
        backgroundAttachment:'fixed',
        height:'100vh',
        width:'100vw',
        position:'relative',
        top:0,
        left:0,
        top:0,
        border:'2px solid transparent',
        margin: 0
    }
    return imageStyle
}
//Accessories functional component to show accessories
const Accessories = ()=>(
    <div>
        <div style={getImageStyle(solar)}>
            <div class="text">
            <span class="clear">
                <h1>Solar and Powerwall</h1>
                <sub>Power Everything</sub>
            </span>
            </div>
            <div class="btn">
            <button class="dark">Learn more</button>
            </div>
        </div>

        <div style={getImageStyle(modelwall)}>
            <div class="text">
            <span class="clear">
                <h1>Accessories</h1>
            </span>
            </div>
            <div class="btn">
                <button class="dark">Shop Now</button>
            </div>
            {/*It contains url to tesla website*/}
            <Footer/>
        </div>
    </div>
)

export default Accessories