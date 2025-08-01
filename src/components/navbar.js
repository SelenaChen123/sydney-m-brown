import "./navbar.css";

import { NavLink } from "react-router-dom";

const styles = ({ isActive }) => ({
  color: isActive ? "#000000" : "#969696ff",
});

function Navbar() {
  return (
    <div className="navigation-bar">
      <ol>
        <li className="navigation-bar-item">
          <NavLink to={"/contact"} style={styles}>
            Contact
          </NavLink>
        </li>
        <li className="navigation-bar-item">
          <NavLink to={"/portfolio"} style={styles}>
            Portfolio
          </NavLink>
        </li>
        <li className="navigation-bar-item">
          <NavLink to={"/experience"} style={styles}>
            Experience
          </NavLink>
        </li>
        <li className="navigation-bar-item">
          <NavLink to={"/about"} style={styles}>
            About
          </NavLink>
        </li>
        <li id="home" className="navigation-bar-item">
          <NavLink to={"/"}>
            SYDNEY M BROWN
          </NavLink>
        </li>
      </ol>
    </div>
  );
}

export default Navbar;
