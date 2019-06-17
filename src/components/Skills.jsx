import React, { PropTypes, Component } from 'react';
import {ReferenceLine, ResponsiveContainer, ComposedChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar} from 'recharts'

const SKILLS = [
  { title: "HTML", val: 80 },
  { title: "CSS", val: 60 },
  { title: "Bootstrap", val: 60 },
  { title: "Javascript", val: 50 },
  { title: "jQuery", val: 60 },
  { title: "React", val: 40 },
  { title: "PHP", val: 50 },
  { title: "Ruby", val: 60 },
  { title: "Rails", val: 60 },
  { title: "C#", val: 30 },
  { title: "Unity", val: 40 }
];

const SkillsChart = () => {
  	return (
      <div className="skills">
        <div className="section-title">SKILLS</div>
        <div className="chart-container">
          <div className="skills-chart">
            <ResponsiveContainer width="100%" height="100%">
              <ComposedChart width={600} height={400} data={SKILLS}
                  margin={{top: 20, right: 20, bottom: 20, left: 20}}>
                <CartesianGrid stroke='#f5f5f5'/>
                <XAxis dataKey="title"/>
                <YAxis domain={[0,100]} hide={true} />
                <ReferenceLine y={99} label="チョットデキル" stroke="lightgray" strokearray="3 3" />
                <ReferenceLine y={66} label="なにもわからない" stroke="lightgray" strokearray="3 3" />
                <ReferenceLine y={33} label="完全に理解した" stroke="lightgray" strokearray="3 3" />
                <Tooltip/>
                <Bar dataKey='val' barSize={20} fill='#413ea0'/>
              </ComposedChart>
          </ResponsiveContainer>
          </div>
        </div>
        <p>
        ※私の主観ですが、触れた技術の習得レベルです
        </p>
      </div>
    );
};


export default SkillsChart;