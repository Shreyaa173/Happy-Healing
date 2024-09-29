import "./Home.css";
import Navbar from "./Navbar/Navbar.jsx";

const Home = () => {
  return (
    <>
      <div className="home">
        <Navbar />
        <div className="images">
          <div className="home-image">
            <img src="./Graphics/home-image.jpeg" alt="" />
          </div>
          <div className="home-text">
            <img src="./Graphics/home-text.jpeg" alt="" />
            <div className="home-button">
              <button>Heal Now</button>
            </div>
          </div>
        </div>
        <img src="./Graphics/leaf.png" className="leaf" alt="" />
      </div>
    </>
  );
};

export default Home;
