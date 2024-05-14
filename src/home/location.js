import React, { useEffect, useState } from "react";

const Location = () => {
  const [screenHeight, setScreenHeight] = useState(window.innerHeight);
  useEffect(() => {
    const handleResize = () => {
      setScreenHeight(window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div>
      <div class="location" style={{ width: "100%", height: screenHeight }}>
        <iframe
          width="100%"
          height="100%"
          title="map"
          frameborder="0"
          scrolling="no"
          marginheight="0"
          marginwidth="0"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3915.9505875785426!2d76.98165257543002!3d11.042331654231933!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba8586c7f74be0d%3A0x5c2878adc2503306!2sKovai%20ENT%20Hospital%20%26%20Research%20Centre!5e0!3m2!1sen!2sin!4v1715336669466!5m2!1sen!2sin"
        >
          <a href="https://www.gps.ie/">gps systems</a>
        </iframe>

      </div>
    </div>
  );
};

export default Location;
