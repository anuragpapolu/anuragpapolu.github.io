import { NavLink } from "react-router-dom";
import '../scss/Navbar.scss';

export default function Navbar() {
  return (
    <>
        <ul className="navbar">
            <NavLink to="/" activeclassname="active">
                Work
            </NavLink>
            <NavLink to="/education" activeclassname="active">
                Education
            </NavLink>
            <NavLink to="/projects" activeclassname="active">
                Projects
            </NavLink>
        </ul>
        <div className="padding"></div>
    </>
  );
}