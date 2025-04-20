import React, { useEffect, useState } from "react";
import "./ProfileBanner.css";
import PlayButton from "../components/PlayButton";
import MoreInfoButton from "../components/MoreInfoButton";
import { getProfileBanner } from "../queries/getProfileBanner";
import { ProfileBanner as ProfileBannerType } from "../types";

const ProfileBanner: React.FC = () => {
  const [bannerData, setBannerData] = useState<ProfileBannerType | null>(null);

  useEffect(() => {
    async function fetchData() {
      const data = await getProfileBanner();
      setBannerData(data);
    }
    fetchData();
  }, []);

  if (!bannerData) return <div>Loading...</div>;

  const handlePlayClick = () => {
    window.open(
      "https://drive.google.com/file/d/1EaaRyQZloaG9ReTm7orVX9QrQ6Muv38N/view?usp=sharing"
    );
  };

  const handleLinkedinClick = () => {
    window.open("https://www.linkedin.com/in/jahidulkabir/");
  };

  return (
    <div className="profile-banner">
      <div className="banner-content">
        <h1 className="banner-headline" id="headline">
          MD Jahidul Kabir
        </h1>
        <p className="banner-description">
          An experienced it professional working at Microsoft CSS Shanghai,
          providing high-quality technical support to Microsoft 365 global
          Premier customers by applying advanced troubleshooting skills to
          handle critical issues, and delivering high-quality service through
          timely response, resolution, collaboration, and execution. Also, work
          directly with the Microsoft product engineering team on bug/CFL issues
          on Security & Compliance, Exchange online, Azure, SPO, Power BI etc.
          Currently engaged with DevOps team member as well.
        </p>

        <div className="banner-buttons">
          <PlayButton onClick={handlePlayClick} label="Resume" />
          <MoreInfoButton onClick={handleLinkedinClick} label="LinkedIn" />
        </div>
      </div>
    </div>
  );
};

export default ProfileBanner;
