import { useEffect, useState } from "react";
import Cropper from "react-cropper";
import "cropperjs/dist/cropper.css";
import axios from "axios";
import image from "../assets/avatar.jpg";

const YOUR_API_KEY = "cg7Wpi47wPgwdaoevqcanJ21";
const defaultSrc = image;
function Coper(props) {
  const [image2, setImage] = useState(defaultSrc);
  const [cropper, setCropper] = useState(null);
  if (!image2) {
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

  const removeBg = () => {
    const formData = new FormData();
    formData.append("size", "auto");
    formData.append("image_file", image2);
    axios({
      method: "post",
      url: "https://api.remove.bg/v1.0/removebg",
      data: formData,

      // responseType: "arraybuffer",
      headers: {
        ...formData,
        "X-Api-Key": YOUR_API_KEY,
      },
      encoding: null,
    })
      .then((response) => {
        console.log(response);
      })
      .catch((e) => console.log(e));
  };

  useEffect(() => {
    removeBg();
  }, []);

  return (
    <div className="coper">
      <input type="file" onChange={onChange} />
      <Cropper
        style={{ height: 300, width: "100%" }}
        zoomTo={0.5}
        src={image2}
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
