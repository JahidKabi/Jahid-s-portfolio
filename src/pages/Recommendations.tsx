import React from "react";
import "./Recommendations.css";
import chrisProfilePic from "../images/Boris.jpg"; // Adjust the path based on your directory structure

const Recommendations: React.FC = () => {
  return (
    <div className="timeline-container">
      <div className="recommendation-card">
        <div className="recommendation-header">
          <img
            src={chrisProfilePic}
            alt="Chris Smith"
            className="profile-pic"
          />
          <div>
            <h3>Boris Babic</h3>
            <p>Cloud adoption specialist</p>
            <p className="date">April 10, 2025</p>
          </div>
        </div>
        <div className="recommendation-body">
          <p>
            I am pleased to write this recommendation for MD Jahidul, who has
            consistently demonstrated exceptional performance as a Lead
            Technical Support Engineer. His deep knowledge and proficiency in
            various technical areas have earned him great feedback from
            customers. His ability to quickly diagnose and resolve issues has
            significantly improved customer satisfaction and trust in our
            services. Customers frequently commend Jahidul for his thorough
            understanding of their needs and his ability to deliver effective
            solutions promptly. Jahidul's dedication to his work is evident in
            his meticulous attention to detail and his commitment to quality.
            It's for these reasons that I highly recommend Jahidul for any
            future endeavours and am confident that he will continue to excel
            and contribute positively to any team he is part of.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Recommendations;
