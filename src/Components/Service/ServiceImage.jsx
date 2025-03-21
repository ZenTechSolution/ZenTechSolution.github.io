import { useState, useEffect } from "react";

export const ServiceData = [
  "/Images/General/software1.jpg",
  "/Images/General/software2.jpg",
  "/Images/General/software3.jpg",
  "/Images/General/software4.jpg",
  "/Images/General/software5.jpg",
  "/Images/General/software6.jpg",
];

export function ServiceImage() {
  const [imageSrc, setImageSrc] = useState("");

  useEffect(() => {
    // Select a random image from ServiceData array on component mount
    const randomImage =
      ServiceData[Math.floor(Math.random() * ServiceData.length)];
    setImageSrc(randomImage);
  }, []);

  return (
    <div className="m-auto text-center my-5">
      <img
        src={imageSrc}
        alt="Service"
        className="img-fluid"
        style={{ objectFit: "cover", minWidth: "100vw", maxHeight: "100vh" }}
      />
    </div>
  );
}
