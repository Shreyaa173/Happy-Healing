import "./Home.css";
import Image1 from './Images/home-image.jpeg'
import Image2 from './Images/home-text.jpeg'
import Image3 from './Images/leaf.png'
import Navbar from "./Navbar/Navbar";
import About from "../About/About"
import Footer from "../Footer/Footer";
import Facilities from "../Facilities/Facilities";

const Home = () => {
    const handleScroll = () => {
      window.scrollTo({
        top: 650,
        behavior: 'smooth',
      });
    };
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
              <button onClick={handleScroll}>Heal Now</button>
            </div>
          </div>
        </div>
        <img src={Image3} className="leaf" alt="" />
      </div>
      <About />
      <Facilities />
      <Footer />
    </>
  );
};

export default Home;
