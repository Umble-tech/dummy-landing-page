import React from "react";
import PropTypes from "prop-types";
import styles from "./Nav.module.scss";
import { Link } from "gatsby";

const Nav = ({ logoSrc }) => {
  return (
    <nav className={styles.nav}>
      <Link to="/">
        <img src={logoSrc} />
      </Link>
    </nav>
  );
};

Nav.propTypes = {
  logoSrc: PropTypes.string.isRequired,
};

export default Nav;
