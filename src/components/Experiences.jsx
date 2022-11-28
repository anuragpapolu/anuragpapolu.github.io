import React from "react";
import { IoHammerOutline, IoBulbOutline, IoTelescopeOutline } from 'react-icons/io5';
import workExperiences from '../data/work';
import educationExperiences from '../data/education';
import projectExperiences from '../data/projects';
import '../scss/Experiences.scss';

function ExperiencesList({ icon, experiences }) {
  	return (
		<div className="experiences">
		  <div className="experiences-list">
		    { icon }
		    {experiences.map((experience, index) =>
		    	<ExperienceCard key={ index } experience={ experience }/>
		    )}
		    <hr/>
		  </div>
		</div>
  	);
}

function ExperienceCard({ experience }) {
	const { title, startDate, endDate, notes } = experience;
	return (
		<div className="experience-item">
			<p className="title">
				{ title }
			</p>
			<small>
				{ startDate } - { endDate }
			</small>
			<ul>
			    {notes.map((note, index) =>
			    	<li key={ index }>
			    		{ note }
			    	</li>
			    )}
			</ul>
		</div>	
	)
}

export function Work() {
	return (
		<ExperiencesList
			icon = { <IoHammerOutline/> }
			experiences = { workExperiences }
		/>
	)
}

export function Education() {
	return (
		<ExperiencesList
			icon = { <IoBulbOutline/> }
			experiences = { educationExperiences }
		/>
	)
}

export function Projects() {
	return (
		<ExperiencesList
			icon = { <IoTelescopeOutline/> }
			experiences = { projectExperiences }
		/>
	)
}
