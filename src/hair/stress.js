import React, { useRef, useState } from 'react';
import img from "../img/upload3.jpg";

function Stress({ formData, setFormData }) {
  const inputRef = useRef(null);
  const [image, setImage] = useState(""); // Changed setimage to setImage
  const handleImageClick = () => {
    inputRef.current.click();
  }

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setImage(file); // Updated setimage to setImage
  }

  return (
    <>
      <div>
        <div onClick={handleImageClick}>
          {image ? <img src={URL.createObjectURL(image)} alt="Uploaded ml-5" /> : <img src={img} alt="Placeholder" style={{ width: '400px', height: '250px' }} />}
          <input type='file' ref={inputRef} onChange={handleImageChange} style={{ display: "none" }} />
        </div>
      </div>
    </>
  );
}

export default Stress;
