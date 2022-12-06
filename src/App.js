import './App.css';
import model3 from './images/model3.png';
import models from './images/models.jpeg';
import modelx from './images/modelx.jpeg';
import modely from './images/modely.png';
import solar from './images/solar.png';
import modelwall from './images/modelwall.png';
import logo from './images/logo.png';
import Nav from './Nav'
import Models from './Models'

function App() {


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
  const logoStyle ={
      width:'100px',
      height:'10px',
      margin:'20px'
  }

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
      <Models data={carData}/>
      <div style={getImageStyle(modely)}>
        <Nav logo={logo} logoStyle={logoStyle} />
        <div class="text">
          <span class="clear">
            <h1>Model Y</h1>
            <sub>2% Company Car Tax. <a href="">Learn More</a></sub>
          </span>
        </div>
        <div class="btn">
          <button class="dark">Custom Order</button>
          <button class="light">Test Drive</button>
        </div>
      </div>

      <div style={getImageStyle(model3)}>
        <div class="text">
          <span class="clear">
            <h1>Model 3</h1>
            <sub>2% Company Car Tax. <a href="">Learn More</a></sub>
          </span>
        </div>
        <div class="btn">
          <button class="dark">Custom Order</button>
          <button class="light">Test Drive</button>
        </div>
      </div>

      <div style={getImageStyle(models)}>
        <div class="text">
          <span class="clear">
            <h1>Model S</h1>
          </span>
        </div>
        <div class="btn">
          <button class="dark">Custom Order</button>
          <button class="light">Test Drive</button>
        </div>
      </div>
      <div style={getImageStyle(modelx)}>
        <div class="text">
          <span class="clear">
            <h1>Model X</h1>
          </span>
        </div>
        <div class="btn">
          <button class="dark">Custom Order</button>
          <button class="light">Test Drive</button>
        </div>
      </div>
      
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
        <footer>
          <div>Tesla 	&#169; 2022  </div>
            <div class="link"><a href="#">Privacy &#38; Legal</a> </div>
            <div class="link"><a href="#">Contact</a></div>
            <div class="link"><a href="#">Careers</a></div>
            <div class="link"><a href="#">News</a></div>
            <div class="link"><a href="#">Location</a></div>
        </footer>
      </div>
      
    </main>
  );
}

export default App;
