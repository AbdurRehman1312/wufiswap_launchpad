import React from 'react';

const ProgressBarMobile = ({ activePhase }) => {
  const isMobile = window.innerWidth <= 600; // This checks if the screen width is 600px or less

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
    const activePosition = milestones[activePhase - 1].position;
    const colorStops = [
      `rgba(255, 82, 151, 1) 0%`,
      `rgba(131, 19, 203, 1) ${Math.min(55, activePosition * 55 / 100)}%`,
      `rgba(0, 255, 209, 1) ${Math.min(100, activePosition)}%`,
      `grey ${activePosition}% 100%`
    ];
    return `linear-gradient(${isMobile ? 'to bottom' : 'to right'}, ${colorStops.join(", ")})`;
  };
  const formatClassName = (phaseName) => {
    const className = `labelMobile-${phaseName.toLowerCase().replace(/[\s:]/g, '-')}`;
    console.log(className); // Log the generated class name
    return className;
  };
  
  return (
    <div className="timelineMobile block md:hidden" style={{ background: getGradient() }}>
      {milestones.map((milestone, index) => (
        <div className="nodeMobile" style={{
          [isMobile ? 'top' : 'left']: `${milestone.position}%`,
          background: index < activePhase ? getNodeGradient() : 'grey'
        }} key={index}>
           <span className={`${formatClassName(milestone.phase)} labelMobile`} >{milestone.phase}<br />{milestone.date}</span>
        </div>
      ))}
    </div>
  );
};

export default ProgressBarMobile;
