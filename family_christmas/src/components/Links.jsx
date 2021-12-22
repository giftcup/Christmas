import React from "react";
import { Link } from "react-router-dom";

function Links() {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/scriptures">Scriptures</Link>
      <Link to="gallery">Gallery</Link>
    </div>
  );
}
export default Links;
