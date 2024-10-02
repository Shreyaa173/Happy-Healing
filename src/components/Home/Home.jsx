import "./Home.css";
import Image1 from './Images/home-image.jpeg'
import Image2 from './Images/home-text.jpeg'
import Image3 from './Images/leaf.png'
import Navbar from "./Navbar/Navbar";

const Home = () => {
  return (
    <>

      
      <div className="home">
        <div className="images">
          <div className="home-image">
            <img src= {Image1} alt="" />
          </div>
          <div className="home-text">
            <img src={Image2} alt="" />
            <div className="home-button">
              <button>Heal Now</button>
            </div>
          </div>
        </div>
        <img src={Image3} className="leaf" alt="" />
      </div>
    </>
  );
};

export default Home;
