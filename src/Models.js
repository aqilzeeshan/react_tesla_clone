//Import React
import React from 'react'
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
//Models functional component takes json array of objects where each object represents each product/car
//It loops through array showing each product/car (its heading, subheading and image)
const Models = (props)=>{
    const carData = props.data
    return (
        carData.map((obj)=>{
            return (
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
            )
        })  
    )
}
//export Models so it can be used by other components
export default Models