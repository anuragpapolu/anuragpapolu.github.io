import { WorkIcon, EducationIcon, ProjectsIcon } from '../components/Icons';
import '../scss/Experiences.scss';

export function Work() {
	const experiences = [
		new Experience(
			"Twitter",
			"June 2020",
			"January 2023",
			[
				"Backend developer on the Twitter Product Analytics team working with Python, Scala, and SQL",
				"Worked to integrate Google BigQuery Enterprise into Twitter’s existing engineering infrastructure",
				"Built systems to automatically track schema, permissions, and retention of company data stored in BigQuery",
				"Created compliance-enforcement application that deleted and blocked access to BigQuery tables that fail to meet compliance standards after an initial grace period"
			]
		),
		new Experience(
			"MongoDB",
			"May 2019",
			"August 2019",
			[
				"Full-stack developer on the MongoDB Atlas product working with Java and React",
				"Enabled Atlas users to securely connect to their databases via certificates",
				"Added UI features to simplify certificate management for users of Atlas’s web portal"
			]
		),
		new Experience(
			"Uber",
			"May 2018",
			"August 2018",
			[
				"Full-stack developer on the Uber Freight product working with Go and React",
				"Built email reminder systems to relay payment information to Uber Freight truck drivers",
				"Collaborated with UI/UX designers to add features to the Uber Freight Operations team’s internal dashboard"
			]
		)
	]
	return (
		<ExperiencesList
			icon = { <WorkIcon/> }
			experiences = { experiences }
		/>
	)
}

export function Education() {
	const experiences = [
		new Experience(
			"Computer Science B.A. - UC Berkeley",
			"August 2016",
			"May 2020",
			[
				"Coursework in Machine Learning, Artificial Intelligence, User Interface Design, Computer Architecture, and Operating Systems"
			]
		),
		new Experience(
			"Data Science B.A. - UC Berkeley",
			"August 2016",
			"May 2020",
			[
				"Domain Emphasis in Psychology & Cognition",
				"Coursework in Computational Models of Cognition, Discrete Mathematics, Probability Theory, and Human Language Acquisition"
			]
		)
	]
	return (
		<ExperiencesList
			icon = { <EducationIcon/> }
			experiences = { experiences }
		/>
	)
}

export function Projects() {
	const experiences = [
		new Experience(
			"Goodpoint",
			"May 2017",
			"May 2018",
			[
				"Launched a VC-backed startup seeking to revamp the document feedback process",
				"Built at Pear VC's Summer 2017 Startup Launchpad program"
			]
		),
		new Experience(
			"DiversaTech Consulting",
			"August 2018",
			"December 2019",
			[
				"Analyzed AirBnb’s current host verification system and researched possible improvements",
				"Researched opportunities to integrate partnerships and third-party content to increase Twitter's user engagement"
			]
		)
	]
	return (
		<ExperiencesList
			icon = { <ProjectsIcon/> }
			experiences = { experiences }
		/>
	)
}

function ExperiencesList({ icon, experiences }) {
  	return (
		<div className="experiences">
		  <div className="experiences-list">
		    { icon }
		    <hr/>
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
			    	<li>
			    		{ note }
			    	</li>
			    )}
			</ul>
		</div>	
	)
}

class Experience {
  constructor(title, startDate, endDate, notes) {
    this.title = title;
    this.startDate = startDate;
    this.endDate = endDate;
    this.notes = notes;
  }
}


