import React, { useState } from "react";

let whyUsData = [
  {
    name: "Section 1",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis sit voluptates recusandae itaque possimus, repellat voluptatibus dicta non! Adipisci magni quod quia maiores nulla quae sapiente harum rerum sunt quis.",
    image: "./Images/Icons/icon.svg",
  },
  {
    name: "Section 2",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis sit voluptates recusandae itaque possimus, repellat voluptatibus dicta non! Adipisci magni quod quia maiores nulla quae sapiente harum rerum sunt quis.",
    image: "./Images/Icons/icon.svg",
  },
  {
    name: "Section3",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis sit voluptates recusandae itaque possimus, repellat voluptatibus dicta non! Adipisci magni quod quia maiores nulla quae sapiente harum rerum sunt quis.",
    image: "./Images/Icons/icon.svg",
  },
  {
    name: "Section 4",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis sit voluptates recusandae itaque possimus, repellat voluptatibus dicta non! Adipisci magni quod quia maiores nulla quae sapiente harum rerum sunt quis.",
    image: "./Images/Icons/icon.svg",
  },
  {
    name: "Section 5",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis sit voluptates recusandae itaque possimus, repellat voluptatibus dicta non! Adipisci magni quod quia maiores nulla quae sapiente harum rerum sunt quis.",
    image: "./Images/Icons/icon.svg",
  },
  {
    name: "Section 6",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis sit voluptates recusandae itaque possimus, repellat voluptatibus dicta non! Adipisci magni quod quia maiores nulla quae sapiente harum rerum sunt quis.",
    image: "./Images/Icons/icon.svg",
  },
];

export const WhyUs = () => {
  return (
    <div className="whyUsSection py-3 mt-3">
      <WhyUsDiv />
    </div>
  );
};

function WhyUsDiv() {
  const [showAll, setShowAll] = useState(false);

  const visibleBoxes = showAll ? whyUsData : whyUsData.slice(0, 3);

  return (
    <div className="whyUsSection text-center p-4 mt-4">
      <h2 className="sectionHeading">
        Why Choose <span>Us</span>
      </h2>
      <div className="whyUsBoxes d-flex flex-wrap justify-content-center gap-0 ">
        {visibleBoxes.map((box, index) => (
          <WhyUsBox key={index} box={box} />
        ))}
      </div>
      <button
        className="btn btn-primary mt-4 col-12 col-md-2 "
        onClick={() => setShowAll(!showAll)}
      >
        {showAll ? "Hide" : "View All"}
      </button>
    </div>
  );
}

function WhyUsBox({ box }) {
  return (
    <div className="aboutUs text-center p-3 col-12 p-0">
      <div className="aboutUsImgBox m-auto">
        <img className="sliderImg" src={box.image} alt={box.name} />
      </div>
      <div className="aboutUsImgBoxData ">
        <h4 className="mt-2 textHeading">{box.name}</h4>
        <p className="my-auto textDescription">{box.description}</p>
      </div>
    </div>
  );
}
