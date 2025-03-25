import React, { useEffect, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/opacity.css";

let data = {
  id: "1",
  name: "Service1",
  description:
    "Eyes, vision and dark with an eye of a woman in a test or exam for prescription eye wear or contact lenses at the optometrist or optician. Female testing for eyesight in a studio on a black background 4K stock video",
  img_path:
    "https://cdn.prod.website-files.com/6719ad0ceed6d5aa24a83dcf/6746cd3786ddb52478d995d1_MS%20D365%20ERP%20.webp",
  price: 100,
  tag: "Web",
  overView:
    "Our web development services provide enterprise-grade and customized web development services tailored to meet the evolving demands of modern businesses.Whether you need a simple landing page or a complex web application, we have the expertise to deliver results that exceed expectations.",
};

export const ServiceHero = ({ profile }) => {
  const [data, setData] = useState({});

  useEffect(() => {
    setData(profile);
  }, [profile]);

  return (
    <div
      className="d-flex align-items-end justify-content-center position-relative"
      style={{
        width: "100vw",
        height: "90vh",
        overflow: "hidden",
      }}
    >
      {/* Lazy Load Background Image - Positioned Absolutely */}
      <LazyLoadImage
        src={data?.img_path}
        effect="opacity" // Smooth fade-in effect
        alt="Project Background"
        className="project-hero-bg"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: 0, // Background image stays behind the content
        }}
      />

      {/* Content - Above Background Image */}
      <div
        className="glass-box text-white p-4 rounded"
        style={{
          width: "90%",
          maxWidth: "90%",
          minWidth: "280px",
          backdropFilter: "blur(10px)",
          background: "rgba(0, 0, 0, 0.28)",
          border: "1px solid rgba(255, 255, 255, 0.3)",
          borderRadius: "12px",
          textAlign: "center",
          padding: "20px",
          marginBottom: "5vh",
          zIndex: 1, // Ensures content is above the background image
          position: "absolute",
        }}
      >
        <div className="w-100">
          <h2 className="fw-bold fs-6 text-start">Services</h2>
          <p
            className="mt-2 fs-2 fw-bold text-start"
            style={{
              display: "-webkit-box",
              WebkitBoxOrient: "vertical",
              WebkitLineClamp: 3,
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            {data.name}
          </p>
          <p
            className="mt-0 fs-4 text-start"
            style={{
              display: "-webkit-box",
              WebkitBoxOrient: "vertical",
              WebkitLineClamp: 3,
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            {data.description}
          </p>
        </div>
      </div>
    </div>
  );
};
// export const ServiceHero = ({ profile }) => {
//   const [data, setData] = useState({});

//   useEffect(() => {
//     setData(profile);
//   }, [profile]);

//   return (
//     <div
//       className="d-flex align-items-end justify-content-center position-relative"
//       style={{
//         width: "100vw",
//         height: "90vh",
//         overflow: "hidden",
//       }}
//     >
//       {/* Lazy Load Background Image - Positioned Absolutely */}
//       <LazyLoadImage
//         src={data.img_path}
//         effect="blur"
//         alt={data?.name}
//         className="service-hero-bg"
//         style={{
//           position: "absolute",
//           top: 0,
//           left: 0,
//           width: "100%",
//           height: "100%",
//           objectFit: "cover",
//           zIndex: 0, // Background image stays at the lowest layer
//         }}
//       />

//       {/* Content - Above Background Image */}
//       <div
//         className="glass-box text-white p-4 rounded"
//         style={{
//           width: "90%",
//           maxWidth: "90%",
//           minWidth: "280px",
//           backdropFilter: "blur(10px)",
//           background: "rgba(0, 0, 0, 0.28)",
//           border: "1px solid rgba(255, 255, 255, 0.3)",
//           borderRadius: "12px",
//           textAlign: "center",
//           padding: "20px",
//           marginBottom: "5vh",
//           zIndex: 1, // Ensures content is above the background image
//           position: "absolute",
//         }}
//       >
//         <div className="w-100">
//           <h2 className="fw-bold fs-6 text-start">Services</h2>
//           <p
//             className="mt-2 fs-3 fw-bold text-start"
//             style={{
//               display: "-webkit-box",
//               WebkitBoxOrient: "vertical",
//               WebkitLineClamp: 3,
//               overflow: "hidden",
//               textOverflow: "ellipsis",
//             }}
//           >
//             {data.name}
//           </p>
//           <p
//             className="mt-2 fs-3 text-start"
//             style={{
//               display: "-webkit-box",
//               WebkitBoxOrient: "vertical",
//               WebkitLineClamp: 3,
//               overflow: "hidden",
//               textOverflow: "ellipsis",
//             }}
//           >
//             {data.description}
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };
