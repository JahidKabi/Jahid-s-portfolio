
import React, { useEffect, useState } from "react";
import "./Certifications.css";
import { FaExternalLinkAlt, FaUniversity } from "react-icons/fa";
import { SiUdemy, SiCoursera, SiIeee } from "react-icons/si";
import { Certification } from "../types";
import { getCertifications } from "../queries/getCertifications";
const iconData: { [key: string]: JSX.Element } = {
  udemy: <SiUdemy />,
  coursera: <SiCoursera />,
  ieee: <SiIeee />,
  university: <FaUniversity />,
};

const Certifications: React.FC = () => {
  return (
    <div className="certifications-container">
      <p>Certifications Will be added soon...</p>
    </div>
  );
};

export default Certifications;
