import React, { useEffect, useState } from "react";
import { ServiceHero } from "./../Components/Service/ServiceHero";
import { ServiceOverview } from "./../Components/Service/ServiceOverview";
import { NavBar } from "./../Components/General/NavBar";
import { ServedIndustries } from "./../Components/General/ServedIndustries";
import { ServiceImage } from "./../Components/Service/ServiceImage";
import { TechStack } from "./../Components/General/TechStack";
import { OurServicesSection } from "./../Components/Landing/OurServicesSection";
import { Footer } from "./../Components/General/Footer";

import { useParams } from "react-router-dom";

export const ServicePage = () => {
  const { id } = useParams();
  const [service, setServiceData] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      let jsonData = localStorage.getItem("services");

      if (jsonData) {
        try {
          let servicesArr = JSON.parse(jsonData);

          if (Array.isArray(servicesArr)) {
            let foundService = servicesArr.find(
              (itemObj) => itemObj.profile.id == id
            );

            if (foundService) {
              setServiceData(foundService);
              document.title = "Services | Zentech Solutions";
            } else {
              console.warn("Service not found with ID:", id);
            }
          }
        } catch (error) {
          console.error("Error parsing services from localStorage:", error);
        }
      } else {
        console.warn("No services data found in localStorage.");
      }
    }, 1000);
  }, []);

  return (
    <div>
      <NavBar />
      {service ? (
        <>
          <ServiceHero profile={service.profile} />
          <ServiceOverview service={service} />
          <OurServicesSection slidesNo={7} />
          <TechStack />
          <ServiceImage />
          <ServedIndustries />
          <Footer />
        </>
      ) : (
        <p>Loading ...</p>
      )}
    </div>
  );
};
