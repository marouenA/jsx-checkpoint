import React from "react";
import "./App.css";
import imageInSrc from "./imageInSrc.jpg";
function App() {
  return (
    <div>
      <div style={{ border: "solid 1px black", maxWidth: "100vw" }}>
        <h1 class="title red">Marouen</h1>

        <br></br>
        <br></br>
        <img src={imageInSrc} alt="imageInSrc" />

        <br></br>
        <br></br>

        <img src="imageInPublic.jpg" alt="imageInPublic" />
      </div>

      <video width="320" height="240" controls>
        <source src="myVideo.mp4" type="video/mp4"></source>
      </video>
    </div>
  );
}

export default App;
