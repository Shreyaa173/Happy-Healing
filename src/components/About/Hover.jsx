import "./Hover.css";

function HoverCard(props) {
  return (
    <div className="teamsleft" data-aos="flip-up" data-aos-duration="1000">
      <div className="achievementleft">
        <div className="front-card">
          <div className="name">
          {props.name}
          <br />
          </div>
                 
        </div>
        <div className="back-card">
          <span className="about-p">
              {props.details}
              <br />
            </span>
        </div>
      </div>
    </div>
  );
}
export default HoverCard;