import { useState } from "react";
import Cropper from "react-cropper";
import "cropperjs/dist/cropper.css";
import image from "../assets/avatar.jpg";

const defaultSrc = image;
function Coper(props) {
  const [image, setImage] = useState(defaultSrc);
  const [cropper, setCropper] = useState(null);
  if (!image) {
    return <h1>londing..</h1>;
  }

  const onChange = (e) => {
    e.preventDefault();
    let files;
    if (e.dataTransfer) {
      files = e.dataTransfer.files;
    } else if (e.target) {
      files = e.target.files;
    }
    const reader = new FileReader();
    reader.onload = () => {
      setImage(reader.result);
    };
    reader.readAsDataURL(files[0]);
  };

  return (
    <div className="coper">
      <input type="file" onChange={onChange} />
      <Cropper
        style={{ height: 300, width: "100%" }}
        zoomTo={0.5}
        src={image}
        preview=".image-in"
        background={false}
        responsive={true}
        onInitialized={(instance) => {
          setCropper(instance);
        }}
        guides={true}
      />
    </div>
  );
}

export default Coper;
