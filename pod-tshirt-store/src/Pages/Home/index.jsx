import { useState } from "react";
import ImageGrid from "../../components/ImageGrid";
import data from "./data";
import DisplayAnimatedImage from "../../components/DisplayAnimatedImage";

export default function Home() {
  const [selectedImage, setSelectedImage] = useState(null);

  console.log(data);

  return (
    <div>
      {selectedImage !== null ? (
        <ImageGrid
          data={data}
          Styles={{ Div: { fontSize: "32px" }, img: [{}], allImg: { width: "149px" } }}
        />
      ) : (
        <DisplayAnimatedImage />
      )}
    </div>
  );
}
