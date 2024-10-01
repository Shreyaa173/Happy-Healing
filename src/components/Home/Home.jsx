import "./Home.css";
import Image1 from './Images/home-image.jpeg'
import Image2 from './Images/home-text.jpeg'
import Image3 from './Images/leaf.png'

const Home = () => {
  return (
    <>
      <div className="home">
        <div className="nav">
          <div className="logo">
            <p>An Athena's Aces Project</p>
          </div>
          <div className="navItems">
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/mindfulness">Mindfulness</a>
              </li>
              <li>
                <a href="/resources">Resources</a>
              </li>
              <li>
                <a href="/faq">FAQ</a>
              </li>
            </ul>
          </div>
          <div className="button">
            <button className="btn">Login</button>
          </div>
        </div>
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
