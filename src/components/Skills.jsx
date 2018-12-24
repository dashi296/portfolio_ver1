import React, { PropTypes, Component } from 'react';
import {Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis} from 'recharts'

const SKILLS = [
  {title:"HTML", val:80},
  {title:"CSS", val:60},
  {title:"Bootstrap", val:60},
  {title:"JavaScript", val:50},
  {title:"React", val:40},
  {title:"Ruby", val:60},
  {title:"Rails", val:70},
  {title:"C#", val:30},
  {title:"Unity", val:40}
];

const SkillsChart = () => {
  	return (
      <div className="skills">
        <div class="section-title">SKILLS</div>

        <div class="skills-chart">
    	    <RadarChart cx={250} cy={200} outerRadius={170} data={SKILLS} width={500} height={400}>
            <PolarGrid />
            <PolarAngleAxis dataKey="title" />
            <PolarRadiusAxis angle={45} domain={[0,100]}/>
            <Radar name="Shun" dataKey="val" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6}/>
          </RadarChart>
        </div>

        <p>
        ※完全に主観ですが、触れた技術の習得レベルです
        </p>
      </div>
    );
};


export default SkillsChart;