import React from "react";
import Family from "../assets/family.jpeg";
import "../styles/Home.css";
function Home() {
  return (
      <div>
    <div className="home">
      <div className="message">
        <p>Merry Christmas &amp; A Prosperous New Year</p>
      </div>
      <div className="familypic">
        <img src={Family} alt="family" className="family" />
      </div>
    </div>
    </div>
  );
}
export default Home;
