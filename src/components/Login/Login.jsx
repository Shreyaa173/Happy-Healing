import "./Login.css";

const Login = () => {
  return (
    <>
      <div className="login-container">
        <img
          className="turtle-image"
          src="./Graphics/Home-image.png"
          alt="Turtle"
        />
        <div className="progress-bar-container">
          <div className="progress-bar">
            <div className="progress" />
          </div>
        </div>
        <div className="login-text">
          <img src="./Graphics/home-text.png" alt="" />
        </div>
      </div>
    </>
  );
};

export default Login;
