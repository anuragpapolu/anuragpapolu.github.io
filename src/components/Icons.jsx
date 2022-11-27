import { BsWrench } from 'react-icons/bs';
import { GiBearFace, GiLaptop } from 'react-icons/gi';
import '../scss/Icons.scss';

export function WorkIcon() {
  return (
	<>
		<svg width="0" height="0">
			<radialGradient id="work-icon" r="150%" cx="50%" cy="100%">
				<stop stop-color="#74b9ff" offset="0%"></stop>
				<stop stop-color="#a29bfe" offset="80%"></stop>
			</radialGradient>
		</svg>
		<GiLaptop className="icon work-icon"/>
	</>
  );
}

export function EducationIcon() {
  return (
	<>
		<svg width="0" height="0">
			<radialGradient id="education-icon" r="150%" cx="50%" cy="100%">
				<stop stop-color="#2e86de" offset="0%"></stop>
				<stop stop-color="#54a0ff" offset="50%"></stop>
			</radialGradient>
		</svg>
		<GiBearFace className="icon education-icon"/>
	</>
  );
}

export function ProjectsIcon() {
  return (
	<>
		<svg width="0" height="0">
			<radialGradient id="projects-icon" r="150%" cx="50%" cy="100%">
				<stop stop-color="#74b9ff" offset="0"></stop>
				<stop stop-color="#26de81" offset="0.65"></stop>
			</radialGradient>
		</svg>
		<BsWrench className="icon projects-icon"/>
	</>
  );
}
