import React from 'react'
import model3 from './images/model3.png';
import models from './images/models.jpeg';
import modelx from './images/modelx.jpeg';
import modely from './images/modely.png';

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

const Models = (props)=>{
    const carData = props.data
    return (

            //console.log("-->"+obj.heading)
            //console.log("==>"+obj.subheading)
            //console.log(">>>"+obj.image)

        carData.map((obj)=>{

            <div style={getImageStyle(obj.image)}>
                <div class="text">
                <span class="clear">
                    <h1>{obj.heading}</h1>
                    <sub>{obj.subheading}<a href="">Learn More</a></sub>
                </span>
                </div>
                <div class="btn">
                <button class="dark">Custom Order</button>
                <button class="light">Test Drive</button>
                </div>
            </div>
        })  
    )
}

export default Models