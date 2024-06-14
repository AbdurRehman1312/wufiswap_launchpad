import React, { useState } from 'react';

const ProgressBar = () => {
  const [activePhase, setActivePhase] = useState(1);
  function getNodeGradient() {
    return 'conic-gradient(rgba(11, 188, 156, 1) 0%, rgba(134, 66, 177, 1) 55%, rgba(255, 104, 164, 1) 100%)';
}

  
  const milestones = [
    { phase: "Registration", date: "06/14/24", position: 20 },
    { phase: "Sale phase 1: WUFI Holders", date: "06/20/24", position: 40 },
    { phase: "Sale phase 2: FCFS", date: "06/21/24", position: 60 },
    { phase: "Distribution", date: "06/30/24", position: 80 }
  ];

  const gradientStops = [
    { stop: "rgba(255,82,151,1)" },
    { stop: "rgba(131,19,203,1)" },
    { stop: "rgba(0,255,209,1)" }
  ];

  const getGradient = () => {
    if (activePhase >= milestones.length) {
      return `linear-gradient(90deg, ${gradientStops.map(s => s.stop).join(", ")})`;
    }
    let percentages = milestones.map(m => m.position);
    let colorStops = [...gradientStops.map((g, idx) => `${g.stop} ${idx ? percentages[activePhase - 1] : 0}%`)];
    colorStops.push(`grey ${percentages[activePhase]}%`);
    return `linear-gradient(90deg, ${colorStops.join(", ")})`;
  };

  return (
    <div className="timeline" style={{ background: getGradient(), backgroundColor:"gray" }}>
      {milestones.map((milestone, index) => (
        <span className="node" style={{ left: `${milestone.position}%`, background: index <= activePhase ? getNodeGradient() : 'grey' }} key={index} onClick={() => setActivePhase(index + 1)}>
          <div className="label text-sm">{milestone.phase}<br/>{milestone.date}</div>
        </span>
      ))}
    </div>
  );
};

export default ProgressBar;
