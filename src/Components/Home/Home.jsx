import React from "react";
import "./home.scss";
import video from "../../assets/video2.mp4";

const Home = () => {
  return (
    <section className="home">
      <div className="overlay">
        <video src={video} muted loop type="video/mp4"></video>

        <div className="homeContent container">
          <div className="textDiv">
            <span className="smallText">Paketlerimiz</span>
            <h1 className="homeTitle">Tatilinizi Planlayın</h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
