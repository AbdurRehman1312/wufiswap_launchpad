import React, { useState } from 'react';

const ProgressBar = ({activePhase, setActivePhase}) => {
 

  function getNodeGradient() {
    return 'conic-gradient(rgba(11, 188, 156, 1) 0%, rgba(134, 66, 177, 1) 55%, rgba(255, 104, 164, 1) 100%)';
  }

  const milestones = [
    { phase: "Registration", date: "06/14/24", position: 20 },
    { phase: "Sale phase 1: WUFI Holders", date: "06/20/24", position: 40 },
    { phase: "Sale phase 2: FCFS", date: "06/21/24", position: 60 },
    { phase: "Distribution", date: "06/30/24", position: 80 }
  ];



  const getGradient = () => {
    // This will get the position for the active phase
    const activePosition = milestones[activePhase - 1].position;
  
    // Define the gradient stops based on the active position
    const colorStops = [
      `rgba(255, 82, 151, 1) 0%`,
      `rgba(131, 19, 203, 1) ${Math.min(55, activePosition * 55 / 100)}%`,
      `rgba(0, 255, 209, 1) ${Math.min(100, activePosition)}%`,
      `grey ${activePosition}% 100%`
    ];
  
    // Return the CSS for the gradient
    return `linear-gradient(90deg, ${colorStops.join(", ")})`;
  };
  

  return (
    <div className="timeline" style={{ background: getGradient(), }}>
      {milestones.map((milestone, index) => (
        <div className="node" style={{
          left: `${milestone.position}%`,
          background: index < activePhase ? getNodeGradient() : 'grey'
        }} key={index}>
          <span className="label text-sm" >{milestone.phase}<br />{milestone.date}</span>
        </div>
      ))}
    </div>
  );
};

export default ProgressBar;
