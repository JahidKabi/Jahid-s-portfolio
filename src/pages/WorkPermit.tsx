import React, { useEffect, useState } from "react";
import "./WorkPermit.css";
import { getWorkPermit } from "../queries/getWorkPermit";
import { WorkPermit as IWorkPermit } from "../types";
const WorkPermit: React.FC = () => {
  const [workPermitData, setWorkPermitData] = useState<IWorkPermit | null>(
    null
  );
  useEffect(() => {
    async function fetchWorkPermitData() {
      const data = await getWorkPermit();
      setWorkPermitData(data);
    }
    fetchWorkPermitData();
  }, []);

  if (!workPermitData) return <div>Loading...</div>;

  return (
    <div className="work-permit-container">
      <div className="work-permit-card">
        <h2 className="work-permit-headline">🎓 Work Permit</h2>
        <p className="work-permit-summary">
          I'm currently on a <strong>{workPermitData.visaStatus}</strong> 🛂,
          which allows me to work in the China!. My visa is valid which allow me
          the opportunity to build valuable experience and grow my career here.
          🌟
        </p>
        <p className="additional-info">
          For any additional queries please reach me out on +86 15151886124
        </p>
      </div>
    </div>
  );
};

export default WorkPermit;
