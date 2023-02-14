import React from "react";
import { Link } from "react-router-dom";
import { FiLogOut, FiSun, FiMoon } from "react-icons/fi";
import PropTypes from "prop-types";
import ThemeContext from "../contexts/ThemeContext";

function Navigation({ logout, name }) {
  const { theme, toggleTheme } = React.useContext(ThemeContext);

  if (name === undefined) {
    return (
      <nav className="navigation">
        <ul>
          <li>
            <button className="toggle-theme" onClick={toggleTheme}>
              {theme === "dark" ? <FiSun /> : <FiMoon />}
            </button>
          </li>
        </ul>
      </nav>
    );
  }

  return (
    <nav className="navigation">
      <ul>
        <li>
          <Link to="/archives">Arsip</Link>
        </li>
        <li>
          <button className="toggle-theme" onClick={toggleTheme}>
            {theme === "dark" ? <FiSun /> : <FiMoon />}
          </button>
        </li>
        <li>
          <button className="button-logout" onClick={logout}>
            {name}
            <FiLogOut />
          </button>
        </li>
      </ul>
    </nav>
  );
}

Navigation.propTypes = {
  logout: PropTypes.func,
  name: PropTypes.string,
};

export default Navigation;
