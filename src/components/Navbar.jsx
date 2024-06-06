import React from "react";
import { NavLink } from "react-router-dom";
import "../scss/Navbar.scss";

// Navigation bar for website
export default class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.mainContentRef = props.mainContentRef;
    this.state = { toggleStickyComponents: false };
    this.determineToggleStickyComponents =
      this.determineToggleStickyComponents.bind(this);
  }
  componentDidMount() {
    window.addEventListener("scroll", this.determineToggleStickyComponents);
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.determineToggleStickyComponents);
  }
  determineToggleStickyComponents() {
    const windowScrollTop = window.pageYOffset;
    const navbarScrollTop = this.mainContentRef.current.offsetTop;
    const toggleStickyComponents = windowScrollTop >= navbarScrollTop;
    this.setState({
      toggleStickyComponents: toggleStickyComponents,
    });
  }
  render() {
    const { toggleStickyComponents } = this.state;
    const stickyComponentsClass = toggleStickyComponents ? "sticky" : "";
    return (
      <>
        <ul ref={this.navbarRef} className={"navbar " + stickyComponentsClass}>
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
        <div className={"padding " + stickyComponentsClass}></div>
      </>
    );
  }
}
