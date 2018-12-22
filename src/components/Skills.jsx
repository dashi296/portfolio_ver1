import React, { PropTypes, Component } from 'react';
import {Radar, RadarChart, PolarGrid, Legend, PolarAngleAxis, PolarRadiusAxis} from 'recharts'

const SKILLS = [
  {title:"HTML", val:80},
  {title:"CSS", val:60},
  {title:"JavaScript", val:50},
  {title:"Bootstrap", val:50},
  {title:"Ruby", val:80},
  {title:"Rails", val:70},
  {title:"React", val:40}
];

const SkillsChart = () => {
  	return (
      <React.Fragment>
        <div class="section-title">SKILLS</div>
        <div class="skills-chart">
    	    <RadarChart cx={250} cy={200} outerRadius={170} width={500} height={400} data={SKILLS}>
            <PolarGrid />
            <PolarAngleAxis dataKey="title" />
            <PolarRadiusAxis/>
            <Radar name="Shun" dataKey="val" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6}/>
          </RadarChart>
        </div>
      </React.Fragment>
    );
};


export default SkillsChart;