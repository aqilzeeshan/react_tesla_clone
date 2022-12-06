//Import css
import './App.css';
//Import images
import model3 from './images/model3.png';
import models from './images/models.jpeg';
import modelx from './images/modelx.jpeg';
import modely from './images/modely.png';
import logo from './images/logo.png';
//Import components
import Nav from './Nav'
import Models from './Models'
import Footer from './Footer'
import Accessories from './Accessories';

//App is functional component that contains all other components
function App() {
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
  //Syle for logo
  const logoStyle ={
      width:'100px',
      height:'10px',
      margin:'20px'
  }
  //This data is passed to Model component as prop
  //It consists of heading, sub-heading and image to be shown
  const carData = [
    {
      "heading":"Model Y",
      "subheading":"2% Company Car Tax.",
      "image":modely
    },
    {
      "heading":"Model 3",
      "subheading":"2% Company Car Tax.",
      "image":model3
    },
    {
      "heading":"Model S",
      "subheading":"Affordable",
      "image":models
    },
    {
      "heading":"Model X",
      "subheading":"Graceful",
      "image":modelx
    }
  ] 

  return (
    <main>  
      {/*Navigation functional component to show the menu on the top of the page*/}
      <Nav logo={logo} logoStyle={logoStyle} />
      {/*Models functional component to show different cars, their names and brief info*/}
      <Models data={carData}/>
      {/*Accessories functional component to show accessories*/}
      <Accessories/>
    </main>
  );
}

export default App;
