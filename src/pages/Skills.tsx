import React, { useEffect, useState } from "react";
import "./Skills.css";
import { FaReact, FaNodeJs, FaCodeBranch } from "react-icons/fa";
import {
  SiTypescript,
  SiMysql,
  SiKubernetes,
  SiPhp,
  SiPython,
  SiHtml5,
  SiCss3,
} from "react-icons/si";
import { Skill } from "../types";

const iconMap: { [key: string]: JSX.Element } = {
  SiPython: <SiPython />,
  FaNodeJs: <FaNodeJs />,
  FaCodeBranch: <FaCodeBranch />,
  SiPhp: <SiPhp />,
  FaReact: <FaReact />,
  SiTypescript: <SiTypescript />,
  SiMysql: <SiMysql />,
  SiKubernetes: <SiKubernetes />,
  SiHtml5: <SiHtml5 />,
  SiCss3: <SiCss3 />,
};

const Skills: React.FC = () => {
  const [skillsData, setSkillsData] = useState<Skill[]>([]);

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const res = await fetch("/data.json");
        const data = await res.json();
        setSkillsData(data);
      } catch (error) {
        console.error("Error fetching skills data:", error);
      }
    };

    fetchSkills();
  }, []);

  if (skillsData.length === 0) return <div>Loading...</div>;

  const skillsByCategory = skillsData.reduce((acc: any, skill: any) => {
    if (!acc[skill.category]) acc[skill.category] = [];
    acc[skill.category].push(skill);
    return acc;
  }, {});

  return (
    <div className="skills-container">
      {Object.keys(skillsByCategory).map((category, index) => (
        <div key={index} className="skill-category">
          <h3 className="category-title">{category}</h3>
          <div className="skills-grid">
            {skillsByCategory[category].map((skill: any, idx: number) => (
              <div key={idx} className="skill-card">
                <div className="icon">{iconMap[skill.icon] || null}</div>
                <h3 className="skill-name">
                  {skill.name.split("").map((letter: any, i: number) => (
                    <span
                      key={i}
                      className="letter"
                      style={{ animationDelay: `${i * 0.05}s` }}
                    >
                      {letter}
                    </span>
                  ))}
                </h3>
                <p className="skill-description">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Skills;
