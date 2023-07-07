import React, { useEffect, useState } from "react";
import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from "react-share";

function App() {
  const [randomImage, setRandomImage] = useState("");

  useEffect(() => {
    getRandomImage();
  }, []);

  const getRandomImage = () => {
    const images = ["https://picsum.photos/200/300"];
    const randomIndex = Math.floor(Math.random() * images.length);
    setRandomImage(images[randomIndex]);
  };

  return (
    <>
    <h1>Random Image App</h1>
    <div className="App" style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100%",
    }}>
        <img
          src={randomImage}
          alt="Random Image"
        />

      <div style={{ marginLeft: "20px" }}>
        <div>
          <FacebookShareButton url={window.location.href}>
            Share on Facebook
          </FacebookShareButton>
        </div>

        <div>
          <TwitterShareButton url={window.location.href}>
            Share on Twitter
          </TwitterShareButton>
        </div>

        <div>
          <WhatsappShareButton url={window.location.href}>
            Share on WhatsApp
          </WhatsappShareButton>
        </div>
      </div>
    </div>
  </>
  );
}

export default App;
