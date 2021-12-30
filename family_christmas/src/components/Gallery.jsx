import React from "react";
import Christine from "../assets/christine.jpeg";
import "../styles/Gallery.css";
import Family from "../assets/family.jpeg";

function Gallery() {
    let image = document.getElementById("mainImage");

    const showImage = (node) => {
        // image.setAttribute("src", node.getAttribute("src"));
    }
  return (
    <div>
      <div class="box">
        <div id="main">
          <img id="mainImage" src={Christine} alt="" />
        </div>

        <div id="text">
          <h3>Merry Christmas and A Happy New Year</h3>
        </div>

        <div id="pictures">
          <div class="image">
            <img
              onclick={showImage(this)}
              src={Family}
              alt=""
            />
          </div>
          <div class="image">
            <img
              onclick={showImage(this)}
              src={Christine}
              alt=""
            />
          </div>
          <div class="image">
            <img
              onclick={showImage(this)}
              src={Family}
              alt=""
            />
          </div>
          <div class="image">
            <img
              onclick={showImage(this)}
              src={Christine}
              alt=""
            />
          </div>
          <div class="image">
            <img onclick={showImage(this)} src={Christine} alt="" />
          </div>
          <div class="image">
            <img onclick={showImage(this)} src={Christine} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Gallery;
